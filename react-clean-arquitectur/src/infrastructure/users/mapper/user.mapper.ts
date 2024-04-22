import { UserDom } from "@domain/users/index";
import { CreateUserRequestDom, UpdateUserRequestDom } from "@domain/users/models/user-request.dom";
import { UserCreateRequestDto, UserDto, UserUpdateRequestDto } from "@infrastructure/users/dtos/user.dto";

export class UserMapper {
    static toDom(dto: UserDto): UserDom {
      return new UserDom(
        dto.name,
        dto.userName,
        dto.email,
        dto.id.toString()
      );
    }
  
    static toCreateDto(dom: CreateUserRequestDom): UserCreateRequestDto {
      return <UserCreateRequestDto>{
        email: dom.email,
        name: dom.name,
        userName: dom.userName
      }
  }

  static toUpdateDto(dom: UpdateUserRequestDom): UserUpdateRequestDto {
      return <UserUpdateRequestDto>{
        name: dom.name,
        userName: dom.userName
      }
  }
  }