import { PostRequestDom, PostResponseDom } from "@domain/post";
import { CreatePostRequesDto, PostResponseDto } from "../dtos/post.dto";


export class PostMapper {
    static toDom(dto: PostResponseDto): PostResponseDom {
      return new PostResponseDom(
       dto.userId.toString(),
       dto.title,
       dto.body
    
      );
    }
  
    static toCreateDto(dom: PostRequestDom): CreatePostRequesDto {
      return <CreatePostRequesDto>{
        title:dom.title,
        body:dom.body,
        userId: Number(dom.userid)
       
      }
  }

 
  }