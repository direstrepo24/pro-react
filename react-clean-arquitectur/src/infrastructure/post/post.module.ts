import { ContainerModule } from "inversify";
import "reflect-metadata";
import { POST_SYMBOLS, PostRepository } from "@domain/post";
import { PostImplRepository } from "./post-impl.repository";
import { CreatePublicationUseCase } from "@application/post/commands/create-post.usecase";

const postModule = new ContainerModule((bind) => {
  bind<PostRepository>(POST_SYMBOLS.POST_REPOSITORY)
    .to(PostImplRepository)
    .inSingletonScope();

  bind<CreatePublicationUseCase>(POST_SYMBOLS.POST_CREATE)
    .to(CreatePublicationUseCase)
    .inSingletonScope();

  
});
export { postModule };