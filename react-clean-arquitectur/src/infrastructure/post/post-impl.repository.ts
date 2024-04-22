import { Result, Failure, Left, HTTP_CLIENT_SYMBOLS, type HttpClient, HttpClientOptions, UnknowFailure, Right } from "@core/index";
import { PostRequestDom } from "@domain/post/models/post-request.dom";
import { PostResponseDom } from "@domain/post/models/post-response.dom";
import { PostRepository } from "@domain/post/repository/post.repository";
import { inject, injectable } from "inversify";
import { PostMapper } from "./mapper/post.mapper";
import { PostResponseDto } from "./dtos/post.dto";

@injectable()
export class PostImplRepository implements PostRepository  {
    baseURL: unknown = process.env.VITE_BASE_URL
    constructor(
        @inject(HTTP_CLIENT_SYMBOLS.FETCH)
        private readonly httpClient: HttpClient,
    ) {}
    async create(request: PostRequestDom): Promise<Result<PostResponseDom, Failure>> {
        //console.log("infra", request)
        const options = <HttpClientOptions>{
            path: `${this.baseURL}/posts`,
            body: PostMapper.toCreateDto(request),
        };
        const result = await this.httpClient.post<PostResponseDto>(options)
        if(!result.ok){
           return new Left<Failure>(new UnknowFailure(`Unknow error: ${result.error}`))
           //otras operaciones
           
        }
        return new Right<PostResponseDom>(PostMapper.toDom(result.data)) 
      
    }
}