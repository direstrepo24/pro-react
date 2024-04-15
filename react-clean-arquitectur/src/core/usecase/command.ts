import { injectable } from "inversify";
import { UseCase } from "./use-case";
@injectable()
export abstract class Command<Result = void, Params = void> extends UseCase<Result, Params> {
}
