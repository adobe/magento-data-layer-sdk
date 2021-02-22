export interface ShoppingCart {
  id?: string | null;
  items?: Array<ShoppingCartItem>;
  prices?: Array<Subtotal>;
  total_quantity: number;
}

interface Subtotal {
  value: number;
  __typename: string;
}

interface ShoppingCartItem {
  basePrice?: number;
  cartItemId: number;
  mainImageUrl?: string;
  offerPrice: number;
  productName: string;
  productSku: string;
  qty: number;
}
