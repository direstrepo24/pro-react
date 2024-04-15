import { Failure, NoResult, Result } from "@core/index";
import { UserDom } from "../models/user-response.dom";
import { CreateUserRequestDom, UpdateUserRequestDom } from "../models/user-request.dom";
export interface UserRepository{
    list(): Promise<Result<UserDom[], Failure>>
    create(request: CreateUserRequestDom): Promise<Result<UserDom, Failure>>
    update(request: UpdateUserRequestDom): Promise<Result<UserDom, Failure>>
    deleteById(id: number): Promise<Result<NoResult, Failure>>
}