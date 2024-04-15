import { HttpClientOptions, HttpClientResponse } from "..";
 
export interface HttpClient {
    get<Result = void, Error = void>(options:HttpClientOptions): Promise<HttpClientResponse<Result, Error>>;
    post<Result = void, Error = void>(options: HttpClientOptions): Promise<HttpClientResponse<Result, Error>>;
    put<Result = void, Error = void>(options:HttpClientOptions): Promise<HttpClientResponse<Result, Error>>;
    delete<Result = void, Error = void>(options:HttpClientOptions): Promise<HttpClientResponse<Result, Error>>;
}