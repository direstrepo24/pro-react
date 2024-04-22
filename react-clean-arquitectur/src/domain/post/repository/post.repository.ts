import { Failure, Result } from "@core/index";
import { PostRequestDom } from "../models/post-request.dom";
import { PostResponseDom } from "../models/post-response.dom";

export interface PostRepository{
   
    create(request: PostRequestDom): Promise<Result<PostResponseDom, Failure>>
   
}