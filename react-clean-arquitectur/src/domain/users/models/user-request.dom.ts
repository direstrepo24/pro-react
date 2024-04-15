
export class CreateUserRequestDom {
    constructor(
      public name: string,
      public userName: string,
      public email: string
    ) {}
}
  
export class UpdateUserRequestDom {
    constructor(
        public id: number,
        public name: string | null = null,
        public userName: string | null = null
    ) {}
  }