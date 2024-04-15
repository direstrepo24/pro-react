export interface HttpClientOptions {
    path: string;
    body?: ReadableStream | XMLHttpRequestBodyInit | Object; 
    headers?: Record<string, string>;
    removeDefaultHeaders?: Array<string>;
    responseType?:ResponseType
}

type ResponseType = "json" | "text" | "blob" | "arrayBuffer";
export interface HttpClientResponse<Result = unknown, Error = unknown> {
    // Contains  a bOOlean indicating whether the response was successfull (status in the range 200 to 299)
    ok: boolean;
    data: Result;
    error: Error;
    headers?: Record<string, string>;
    status?: number;
    statusText: string;
}