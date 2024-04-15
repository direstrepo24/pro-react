
import { inject, injectable } from "inversify";
import  { Failure, NoParams, Query, Result } from "@core/index";
import {  USER_SYMBOLS, type UserRepository, UserDom } from "@domain/users/index";
@injectable()
export class AllUsersUseCase extends Query<Promise<Result<UserDom[], Failure>>,NoParams > {
    constructor(
        @inject(USER_SYMBOLS.USER_REPOSITORY)
        private readonly _userRepository: UserRepository,
    ) {
        super()
    }
    execute = (_: NoParams): Promise<Result<UserDom[], Failure>> => this._userRepository.list()
}