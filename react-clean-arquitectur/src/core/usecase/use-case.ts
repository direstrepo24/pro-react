import { injectable } from "inversify";

@injectable()
export abstract class UseCase<Result = void, Param = void> {
    abstract execute(params: Param): Result
}
  