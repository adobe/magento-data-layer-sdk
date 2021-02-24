/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { CustomUrl } from "./types/schemas/customUrl";
import { MagentoExtension } from "./types/schemas/magentoExtension";
import { PageOffset } from "./types/schemas/pageOffset";
import { Product } from "./types/schemas/product";
import { ReferrerUrl } from "./types/schemas/referrerUrl";
import { Shopper } from "./types/schemas/shopper";
import { ShoppingCart } from "./types/schemas/shoppingCart";
import { StorefrontInstance } from "./types/schemas/storefrontInstance";

export const generateShopperContext = (
  overrides?: Partial<Shopper>
): Shopper => ({ shopperId: "test", ...overrides });
export const generateMagentoExtensionContext = (
  overrides?: Partial<MagentoExtension>
): MagentoExtension => ({
  magentoExtensionVersion: "1.0.0",
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

export const generateCustomUrlContext = (
  overrides?: Partial<CustomUrl>
): CustomUrl => ({
  customUrl: "https://www.test.org",
  ...overrides,
});

export const generateReferrerUrlContext = (
  overrides?: Partial<ReferrerUrl>
): ReferrerUrl => ({
  referrerUrl: "https://www.test.org",
  ...overrides,
});

export const generateShoppingCartContext = (
  overrides?: Partial<ShoppingCart>
): ShoppingCart => ({
  total_quantity: 5,
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
