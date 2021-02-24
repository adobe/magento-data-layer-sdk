import {Product} from "./product"

export interface ShoppingCart {
  id: string | null;
  items?: Array<ShoppingCartItem>;
  prices?: Array<Price>;
  totalQuantity: number;
}

interface Price {
  value: number;
  currency?: string;
}

interface ShoppingCartItem {
  canApplyMsrp: boolean;
  foramtted_price: string;
  id: string;
  prices?: Array<Price>;
  product: Product;
  configurable_options?: Array<ConfigurableOption>;
  quantity?: number;
}

interface ConfigurableOption {
  id: number;
  option_label: string;
  value_id: number;
  value_label: string;
}