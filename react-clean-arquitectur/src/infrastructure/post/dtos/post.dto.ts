
  interface PostCommonDto {

    userId:number,
    title:string,
    body:string,

  }

  export interface CreatePostRequesDto extends PostCommonDto{

  }

  export interface PostResponseDto extends PostCommonDto{
    id: number,

  }