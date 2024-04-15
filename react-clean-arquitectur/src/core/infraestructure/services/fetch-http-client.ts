import { inject, injectable } from "inversify";
import {
  HttpClient,
  HttpClientOptions,
  type DefaultHeadersProvider,
  HttpClientResponse,
} from "@core/index";
@injectable()
export class FetchHttpClient implements HttpClient {
  constructor(
    @inject("Headers")
    private readonly defaultHeaders: DefaultHeadersProvider
  ) {}
 
  get<Result = void, Error = void>(options: HttpClientOptions): Promise<HttpClientResponse<Result, Error>> {
    let request = <RequestInit>{
      method: "GET",
      headers: this.mergeHeaders(options),
    };
    return this.fetchRequest(options, request)
  }
 
  post<Result = void, Error = void>(options: HttpClientOptions): Promise<HttpClientResponse<Result, Error>> {
    let body = options.body;
    if (body instanceof Object) {
      body = JSON.stringify(options.body);
    }
    let request = <RequestInit>{
      method: "POST",
      body: body,
      headers: this.mergeHeaders(options),
    };
    return this.fetchRequest(options, request)
  }
 
  put<Result = void, Error = void>(options: HttpClientOptions): Promise<HttpClientResponse<Result, Error>> {
    let body = options.body;
    if (body instanceof Object) {
      body = JSON.stringify(options.body);
    }
    let request = <RequestInit>{
      method: "PUT",
      body: body,
      headers: this.mergeHeaders(options),
    };
    return this.fetchRequest(options, request)
  }
 
  delete<Result = void, Error = void>(options: HttpClientOptions): Promise<HttpClientResponse<Result, Error>> {
    const request = <RequestInit>{
      method: "DELETE",
      headers: this.mergeHeaders(options),
    };
    return this.fetchRequest(options, request)
  }
 
  fetchRequest<Result = void, Error = void>(options: HttpClientOptions, request:RequestInit ): Promise<HttpClientResponse<Result, Error>> {
    return new Promise((resolve, _) => {
      fetch(options.path, request)
        .then((response: Response) => this.result<Result, Error>(options, response))
        .then((data) => resolve(data))
        .catch((error) => resolve(this.catchResolve(error)));
    });
  }
 
  async getData(options: HttpClientOptions, response: Response): Promise<any>{
    const responseType = options.responseType ?? "json";
    const responseHandlers = {
      "json": () => response.json().catch(()=> (null)),
      "text": () => response.text().catch(()=> (null)),
      "blob": () => response.blob().catch(()=> (null)),
      "arrayBuffer": () => response.arrayBuffer().catch(()=> (null)),
    }
    const handler = responseHandlers[responseType];
    if(!handler) throw new Error(`Content type not supported: ${options.responseType}`)
    return handler()
  }
 
  async result<Result, Error>(options: HttpClientOptions, response: Response): Promise<HttpClientResponse<Result, Error>> {
    const headers:Record<string, string> = {}
    response?.headers?.forEach((value:string, key:string)=>{
      headers[key] = value;
    })
    const data = await this.getData(options, response);
    return <HttpClientResponse<Result, Error>>{
      data:  response.ok ?  data : null,
      error: !response.ok ?  data : null,
      status: response.status,
      headers: headers,
      statusText: response.statusText,
      ok: response.ok
    }
  }
 
  async catchResolve<Result, Error>(error: any): Promise<HttpClientResponse<Result, Error>> {
    return <HttpClientResponse<Result, Error>>{
     ok: false,
     error: error,
     data: null
    }
  }
 
  mergeHeaders(options: HttpClientOptions): Record<string, string> {
    const defaultHeaders = this.defaultHeaders.getHeaders();
    const mergedHeaders = { ...defaultHeaders, ...options.headers };
    if (options.removeDefaultHeaders) {
      options.removeDefaultHeaders.forEach((headerName) => {
        delete mergedHeaders[headerName];
      });
    }
    return mergedHeaders;
  }
}