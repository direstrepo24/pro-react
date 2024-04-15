import { UseCase } from "./use-case";
import { injectable } from "inversify";

@injectable()
export abstract class Query<Result = void, Params=void> extends UseCase<Result, Params> {
}

export abstract class NoParams{}
export abstract class NoResult{}