
import { inject, injectable } from "inversify";
import  { Command, Failure, NoResult, Result } from "@core/index";
import {  USER_SYMBOLS, type UserRepository } from "@domain/users/index";

@injectable()
export class DeleteUserByIdUseCase extends Command<Promise<Result<NoResult, Failure>>,number > {
    constructor(
        @inject(USER_SYMBOLS.USER_REPOSITORY)
        private readonly _userRepository: UserRepository,
    ) {
        super()
    }
    execute = (params: number): Promise<Result<NoResult, Failure>> => this._userRepository.         deleteById(params)
}