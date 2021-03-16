/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export const CUSTOM_URL_CONTEXT = "custom-url-context";
export const MAGENTO_EXTENSION_CONTEXT = "magento-extension-context";
export const ORDER_CONTEXT = "order-context";
export const PAGE_OFFSET_CONTEXT = "page-offset-context";
export const PRODUCT_CONTEXT = "product-context";
export const REFERRER_URL_CONTEXT = "referrer-url-context";
export const SEARCH_INPUT_CONTEXT = "search-input-context";
export const SEARCH_RESULTS_CONTEXT = "search-results-context";
export const SHOPPER_CONTEXT = "shopper-context";
export const SHOPPING_CART_CONTEXT = "shopping-cart-context";
export const STOREFRONT_INSTANCE_CONTEXT = "storefront-instance-context";

export type ContextName =
  | typeof CUSTOM_URL_CONTEXT
  | typeof MAGENTO_EXTENSION_CONTEXT
  | typeof ORDER_CONTEXT
  | typeof PAGE_OFFSET_CONTEXT
  | typeof PRODUCT_CONTEXT
  | typeof REFERRER_URL_CONTEXT
  | typeof SEARCH_INPUT_CONTEXT
  | typeof SEARCH_RESULTS_CONTEXT
  | typeof SHOPPER_CONTEXT
  | typeof SHOPPING_CART_CONTEXT
  | typeof STOREFRONT_INSTANCE_CONTEXT;
