
interface Orders{
     transaccionid: string,
}

export class CreateOrdersRequestDomDiasPermanencia {
    constructor(
      
      public type: string,
      public body: string
    ) {}
}

export class CreateOrdersRequestDomSinDiasPermanencia {
    constructor(
      public transaccionid: string,
      public type: string,
      public body: string
    ) {}
}
