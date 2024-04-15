
import { inject, injectable } from "inversify";
import  { Command, Failure, Result } from "@core/index";
import {  USER_SYMBOLS, type UserRepository, UserDom } from "@domain/users/index";
import { CreateUserRequestDom } from "@domain/users/models/user-request.dom";

@injectable()
export class CreateUserUseCase extends Command<Promise<Result<UserDom, Failure>>,CreateUserRequestDom > {
    constructor(
        @inject(USER_SYMBOLS.USER_REPOSITORY)
        private readonly _userRepository: UserRepository,
    ) {
        super()
    }
    execute = (request: CreateUserRequestDom): Promise<Result<UserDom, Failure>> => this._userRepository.create(request)
}