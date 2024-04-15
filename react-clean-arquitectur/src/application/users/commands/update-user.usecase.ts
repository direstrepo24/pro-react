
import { inject, injectable } from "inversify";
import  { Command, Failure, Result } from "@core/index";
import { USER_SYMBOLS, type UserRepository, UserDom } from "@domain/users/index";
import { UpdateUserRequestDom } from "@domain/users/models/user-request.dom";

@injectable()
export class UpdateUserUseCase extends Command<Promise<Result<UserDom, Failure>>,UpdateUserRequestDom > {
    constructor(
        @inject(USER_SYMBOLS.USER_REPOSITORY)
        private readonly _userRepository: UserRepository,
    ) {
        super()
    }
    execute = (request: UpdateUserRequestDom): Promise<Result<UserDom, Failure>> => this._userRepository.update(request)
}