import { inject, injectable } from "inversify";
import { Failure, HTTP_CLIENT_SYMBOLS, type HttpClient, HttpClientOptions, UnknowFailure, Result, Right, Left, NoResult } from "@core/index";
import { CreateUserRequestDom, UpdateUserRequestDom } from "@domain/users/models/user-request.dom";
import { UserDom, UserRepository } from "@domain/users";
import { UserMapper } from "./mapper/user.mapper";
import { UserDto } from "./dtos/user.dto";
 
@injectable()
export class UserImplRepository implements UserRepository {
    baseURL: any = process.env.VITE_BASE_URL
    constructor(
        @inject(HTTP_CLIENT_SYMBOLS.FETCH)
        private readonly httpClient: HttpClient,
    ) {}
   
    async list(): Promise<Result<UserDom[], Failure>> {
        const options = <HttpClientOptions>{
            path:`${this.baseURL}/users`,
            removeDefaultHeaders: ['Authorization']
        };
        let result = await this.httpClient.get<UserDto[]>(options)
        return result.ok ?  new Right<UserDom[]>(result.data.map(UserMapper.toDom)):  new Left<Failure>(new UnknowFailure(`Unknow error: ${result.error}`))
    }
 
    async create(request: CreateUserRequestDom): Promise<Result<UserDom, Failure>> {
        const options = <HttpClientOptions>{
            path: `${this.baseURL}/users`,
            body: UserMapper.toCreateDto(request),
        };
        let result = await this.httpClient.post<UserDto>(options)
        return result.ok ?  new Right<UserDom>(UserMapper.toDom(result.data)):  new Left<Failure>(new UnknowFailure(`Unknow error: ${result.error}`))
    }
 
    async update(request: UpdateUserRequestDom): Promise<Result<UserDom, Failure>> {
        const options = <HttpClientOptions>{
            path: `${this.baseURL}/users/${request.id}`,
            body: UserMapper.toUpdateDto(request),
        };
        let result = await this.httpClient.put<UserDto>(options)
        return result.ok ?  new Right<UserDom>(UserMapper.toDom(result.data)):  new Left<Failure>(new UnknowFailure(`Unknow error: ${result.error}`))
    }
   
    async deleteById(id: number): Promise<Result<NoResult, Failure>> {
        const options = <HttpClientOptions>{
            path: `${this.baseURL}/users/${id}`,
        };
        let result  =await this.httpClient.delete<void>(options)
        return result.ok ?  new Right<NoResult>(NoResult):  new Left<Failure>(new UnknowFailure(`Unknow error: ${result.error}`))
    }
}