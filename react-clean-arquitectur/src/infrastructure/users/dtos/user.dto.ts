export interface UserDto {
    id: number;
    name: string;
    userName: string;
    email: string;
}

export interface UserCreateRequestDto {
    name: string;
    userName: string;
    email: string;
}

export interface UserUpdateRequestDto {
    name: string;
    userName: string;
}