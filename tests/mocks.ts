/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { CustomUrl } from "../src/types/schemas/customUrl";
import {
  MagentoExtension,
  Order,
  PageOffset,
  Product,
  ReferrerUrl,
  SearchInput,
  SearchResults,
  Shopper,
  ShoppingCart,
  StorefrontInstance,
} from "../src/types/schemas/";

export const generateCustomUrlContext = (
  overrides?: Partial<CustomUrl>
): CustomUrl => ({
  customUrl: "https://www.test.org",
  ...overrides,
});

export const generateMagentoExtensionContext = (
  overrides?: Partial<MagentoExtension>
): MagentoExtension => ({
  magentoExtensionVersion: "1.0.0",
  ...overrides,
});

export const generateOrderContext = (overrides?: Partial<Order>): Order => ({
  appliedCouponCode: "",
  email: "test@test.com",
  grandTotal: 123,
  orderId: 1293949,
  otherTax: 5,
  paymentMethodCode: "giftcard",
  paymentMethodName: "giftcard",
  salesTax: 7,
  subtotalExcludingTax: 111,
  subtotalIncludingTax: 123,
  ...overrides,
});

export const generatePageOffsetsContext = (
  overrides?: Partial<PageOffset>
): PageOffset => ({
  eventType: "visibilityHidden",
  maxXOffset: 0,
  maxYOffset: 0,
  minXOffset: 0,
  minYOffset: 0,
  ping_interval: 5,
  pings: 20419,
  ...overrides,
});

export const generateProductContext = (
  overrides?: Partial<Product>
): Product => ({
  categories: ["14", "15", "21"],
  name: "Felicia Maxi Dress",
  productId: 1153,
  sku: "VD04",
  topLevelSku: "VD04",
  ...overrides,
});

export const generateReferrerUrlContext = (
  overrides?: Partial<ReferrerUrl>
): ReferrerUrl => ({
  referrerUrl: "https://www.test.org",
  ...overrides,
});

export const generateSearchInputContext = (
  overrides?: Partial<SearchInput>
): SearchInput => ({
  searchType: "popover",
  query: "pants",
  refinementAttribute: "size",
  refinementSelection: "large",
  ...overrides,
});

export const generateSearchResultsContext = (
  overrides?: Partial<SearchResults>
): SearchResults => ({
  products: [],
  suggestions: [],
  categories: [],
  page: 1,
  perPage: 100,
  ...overrides,
});

export const generateShopperContext = (
  overrides?: Partial<Shopper>
): Shopper => ({ shopperId: "guest", ...overrides });

export const generateShoppingCartContext = (
  overrides?: Partial<ShoppingCart>
): ShoppingCart => ({
  totalQuantity: 5,
  id: "1",
  ...overrides,
});

export const generateStorefrontInstanceContext = (
  overrides?: Partial<StorefrontInstance>
): StorefrontInstance => ({
  baseCurrencyCode: "USD",
  environment: "Test",
  environtmentId: "12345",
  storeId: 12345,
  storeName: "Test Store",
  storeUrl: "https://www.test.org",
  storeViewCurrencyCode: "CLP",
  storeViewId: 12345,
  storeViewName: "Test store view",
  websiteId: 12345,
  websiteName: "test website name",
  ...overrides,
});
