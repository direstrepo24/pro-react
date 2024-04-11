let unitPrice: number;
unitPrice = "Table";

function getTotal(
  unitPrice: number,
  quantity: number,
  discount: number
): number {
  const priceWithoutDiscount = unitPrice * quantity;
  const discountAmount = priceWithoutDiscount * discount;
  return priceWithoutDiscount - discountAmount;
}

let total:number = getTotal(500, 10, 0.1);
console.log(total)
let total: string = getTotal(500, "one", 0.1);