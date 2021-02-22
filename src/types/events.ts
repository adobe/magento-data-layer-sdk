/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { MagentoDataLayer } from "..";

export const ADD_TO_CART = "add-to-cart";
export const REMOVE_FROM_CART = "remove-from-cart";
export const UPDATE_CART = "update-cart";
export const INITIATE_CHECKOUT = "initiate-checkout";
export const SIGN_OUT = "sign-out";
export const SIGN_IN = "sign-in";
export const PAGE_ACTIVITY_SUMMARY = "page-activity-summary";
export const CUSTOM_URL = "custom-url";
export const REFERRER_URL = "referrer-url";
export const PAGE_VIEW = "page-view";
export const PRODUCT_PAGE_VIEW = "product-page-view";

export type EventName =
  | typeof ADD_TO_CART
  | typeof REMOVE_FROM_CART
  | typeof UPDATE_CART
  | typeof INITIATE_CHECKOUT
  | typeof SIGN_OUT
  | typeof SIGN_IN
  | typeof PAGE_ACTIVITY_SUMMARY
  | typeof CUSTOM_URL
  | typeof REFERRER_URL
  | typeof PAGE_VIEW
  | typeof PRODUCT_PAGE_VIEW;

export type MagentoDataLayerEventHandler = (
  eventName: EventName,
  mdl: MagentoDataLayer
) => void;

/**
 * add-to-cart
 * remove-from-cart
 * update-cart
 * initiate-checkout
 * sign-out
 * sign-in
 * page-activity-summary
 * custom-url
 * refferer-url
 * page-view
 * product-page-view
 * product-add-to-cart
 */
