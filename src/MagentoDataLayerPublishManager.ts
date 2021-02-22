/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { MagentoDataLayer } from ".";
import {
  ADD_TO_CART,
  CUSTOM_URL,
  INITIATE_CHECKOUT,
  PAGE_ACTIVITY_SUMMARY,
  PAGE_VIEW,
  PRODUCT_PAGE_VIEW,
  REFERRER_URL,
  REMOVE_FROM_CART,
  SIGN_IN,
  SIGN_OUT,
  UPDATE_CART,
} from "./types/events";
import { MagentoDataLayerBase } from "./MagentoDataLayerBase";

export default class MagentoDataLayerPublishManager extends MagentoDataLayerBase {
  constructor(mdl: MagentoDataLayer) {
    super();
    this.mdl = mdl;
  }

  /**
   * Publish Add to Cart event
   */
  addToCart(): void {
    this.pushEvent(ADD_TO_CART);
  }

  /**
   * Publish Custom Url event
   */
  customUrl(): void {
    this.pushEvent(CUSTOM_URL);
  }

  /**
   * Publish Initiate Checkout event
   */
  initiateCheckout(): void {
    this.pushEvent(INITIATE_CHECKOUT);
  }

  /**
   * Publish Page Activity Summary event
   */
  pageActivitySummary(): void {
    this.pushEvent(PAGE_ACTIVITY_SUMMARY);
  }

  /**
   * Publish Page View event
   */
  pageView(): void {
    this.pushEvent(PAGE_VIEW);
  }

  /**
   * Publish Product Page View event
   */
  productPageView(): void {
    this.pushEvent(PRODUCT_PAGE_VIEW);
  }

  /**
   * Publish Referrer Url event
   */
  referrerUrl(): void {
    this.pushEvent(REFERRER_URL);
  }

  /**
   * Publish Remove from Cart event
   */
  removeFromCart(): void {
    this.pushEvent(REMOVE_FROM_CART);
  }

  /**
   * Publish Sign In event
   */
  signIn(): void {
    this.pushEvent(SIGN_IN);
  }

  /**
   * Publish Sign Out event
   */
  signOut(): void {
    this.pushEvent(SIGN_OUT);
  }

  /**
   * Publish Cart Update events
   */
  updateCart(): void {
    this.pushEvent(UPDATE_CART)
  }
}
