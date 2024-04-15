import { ContainerModule } from "inversify";
import "reflect-metadata";
import { UserImplRepository } from "./user-impl.repository";
import { AllUsersUseCase } from "../../application/users/queries/all-users.usecase";
import { USER_SYMBOLS, UserRepository } from "../../domain/users";
import { CreateUserUseCase, DeleteUserByIdUseCase, UpdateUserUseCase } from "@application/users";

const userModule = new ContainerModule((bind) => {
  bind<UserRepository>(USER_SYMBOLS.USER_REPOSITORY)
    .to(UserImplRepository)
    .inSingletonScope();
  bind<AllUsersUseCase>(USER_SYMBOLS.USER_LIST)
    .to(AllUsersUseCase)
    .inSingletonScope();
  bind<CreateUserUseCase>(USER_SYMBOLS.USER_CREATE)
    .to(CreateUserUseCase)
    .inSingletonScope();
  bind<UpdateUserUseCase>(USER_SYMBOLS.USER_UPDATE)
    .to(UpdateUserUseCase)
    .inSingletonScope();
  bind<DeleteUserByIdUseCase>(USER_SYMBOLS.USER_DELETE)
    .to(DeleteUserByIdUseCase)
    .inSingletonScope();
});
export { userModule };
