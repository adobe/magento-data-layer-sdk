/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { MagentoDataLayerBase } from "./MagentoDataLayerBase";

import {
  ADD_TO_CART,
  CUSTOM_URL,
  DATA_LAYER_CHANGE,
  DATA_LAYER_EVENT,
  INITIATE_CHECKOUT,
  ListenerOptions,
  MagentoDataLayerEventHandler,
  PAGE_ACTIVITY_SUMMARY,
  PAGE_VIEW,
  PLACE_ORDER,
  PRODUCT_PAGE_VIEW,
  REFERRER_URL,
  REMOVE_FROM_CART,
  SEARCH_REQUEST_SENT,
  SEARCH_RESPONSE_RECEIVED,
  SEARCH_RESULT_CLICK,
  SIGN_IN,
  SIGN_OUT,
  UPDATE_CART,
} from "./types/events";
import { MagentoDataLayer } from ".";

export default class MagentoDataLayerSubscribeManager extends MagentoDataLayerBase {
  constructor(mdl: MagentoDataLayer) {
    super();
    this.mdl = mdl;
  }

  /**
   * Subscribe to Add to Cart event
   */
  addToCart(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(ADD_TO_CART, handler, options);
  }

  /**
   * Subscribe to Custom Url event
   */
  customUrl(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(CUSTOM_URL, handler, options);
  }

  /**
   * Subscribe to changes on the data layer
   */
  dataLayerChange(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(DATA_LAYER_CHANGE, handler, options);
  }

  /**
   * Subscribe to all events on the data layer
   */
  dataLayerEvent(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(DATA_LAYER_EVENT, handler, options);
  }

  /**
   * Subscribe to Initiate Checkout event
   */
  initiateCheckout(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(INITIATE_CHECKOUT, handler, options);
  }

  /**
   * Subscribe to Page Activity Summary event
   */
  pageActivitySummary(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(PAGE_ACTIVITY_SUMMARY, handler, options);
  }

  /**
   * Subscribe to Page View event
   */
  pageView(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(PAGE_VIEW, handler, options);
  }

  /**
   * Subscribe to Place Order event
   */
  placeOrder(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(PLACE_ORDER, handler, options);
  }

  /**
   * Subscribe to Product Page View event
   */
  productPageView(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(PRODUCT_PAGE_VIEW, handler, options);
  }

  /**
   * Subscribe to Referrer Url event
   */
  referrerUrl(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(REFERRER_URL, handler, options);
  }

  /**
   * Subscribe to Remove from Cart event
   */
  removeFromCart(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(REMOVE_FROM_CART, handler, options);
  }

  /**
   * Subscribe to Search Request Sent event
   */
  searchRequestSent(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(SEARCH_REQUEST_SENT, handler);
  }

  /**
   * Subscribe to Search Response Received event
   */
  searchResponseReceived(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(SEARCH_RESPONSE_RECEIVED, handler);
  }

  /**
   * Subscribe to Search Result Click event
   */
  searchResultClick(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(SEARCH_RESULT_CLICK, handler);
  }

  /**
   * Subscribe to Sign In event
   */
  signIn(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(SIGN_IN, handler, options);
  }

  /**
   * Subscribe to Sign Out event
   */
  signOut(
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(SIGN_OUT, handler, options);
  }

  /**
   * Subscribe to Update Cart event
   */
  updateCart(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(UPDATE_CART, handler);
  }
}
