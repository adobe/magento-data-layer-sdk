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
  foramttedPrice: string;
  id: string;
  prices?: Array<Price>;
  product: Product;
  configurableOptions?: Array<ConfigurableOption>;
  quantity?: number;
}

interface ConfigurableOption {
  id: number;
  optionLabel: string;
  valueId: number;
  valueLabel: string;
}