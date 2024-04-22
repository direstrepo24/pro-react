
import { inject, injectable } from "inversify";
import  { Command, Failure, Result } from "@core/index";
import { POST_SYMBOLS,type PostRepository, PostResponseDom, PostRequestDom,  } from "@domain/post";


@injectable()
export class CreatePublicationUseCase extends Command<Promise<Result<PostResponseDom, Failure>>,PostRequestDom > {
    constructor(
        @inject(POST_SYMBOLS.POST_REPOSITORY)
        private readonly _postRepository: PostRepository,
    ) {
        super()
    }
    execute = (request: PostRequestDom): Promise<Result<PostResponseDom, Failure>> => this._postRepository.create(request)
}