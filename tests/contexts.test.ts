/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mdl, { MagentoDataLayer } from "../src/index";
import {
  generateCustomUrlContext,
  generateMagentoExtensionContext,
  generateOrderContext,
  generatePageOffsetsContext,
  generateProductContext,
  generateReferrerUrlContext,
  generateSearchInputContext,
  generateSearchResultsContext,
  generateShopperContext,
  generateShoppingCartContext,
  generateStorefrontInstanceContext,
} from "./mocks";

beforeAll(() => {
  // Forces magento data layer code to be bundled so that
  // 'data layer should exist' test passes
  expect(mdl).toBeInstanceOf(MagentoDataLayer);
});

beforeEach(async () => {
  jest.resetModules();
  window.adobeDataLayer = [];
  require("@adobe/adobe-client-data-layer");
});

test("data layer should exist", () => {
  expect(window.adobeDataLayer).toBeDefined();
});

describe("contexts", () => {
  test("custom url context", () => {
    const context = generateCustomUrlContext();
    expect(mdl.context.getCustomUrl()).toBeUndefined();
    mdl.context.setCustomUrl(context);
    expect(mdl.context.getCustomUrl()).toEqual(context);
  });

  test("magento extension context", () => {
    const context = generateMagentoExtensionContext();
    expect(mdl.context.getMagentoExtension()).toBeUndefined();
    mdl.context.setMagentoExtension(context);
    expect(mdl.context.getMagentoExtension()).toEqual(context);
  });

  test("order context", () => {
    const context = generateOrderContext();
    expect(mdl.context.getOrder()).toBeUndefined();
    mdl.context.setOrder(context);
    expect(mdl.context.getOrder()).toEqual(context);
  });

  test("page offset context", () => {
    const context = generatePageOffsetsContext();
    expect(mdl.context.getPageOffset()).toBeUndefined();
    mdl.context.setPageOffset(context);
    expect(mdl.context.getPageOffset()).toEqual(context);
  });

  test("product context", () => {
    const context = generateProductContext();
    expect(mdl.context.getProduct()).toBeUndefined();
    mdl.context.setProduct(context);
    expect(mdl.context.getProduct()).toEqual(context);
  });

  test("referrer url context", () => {
    const context = generateReferrerUrlContext();
    expect(mdl.context.getReferrerUrl()).toBeUndefined();
    mdl.context.setReferrerUrl(context);
    expect(mdl.context.getReferrerUrl()).toEqual(context);
  });

  test("search input context", () => {
    const context = generateSearchInputContext();
    expect(mdl.context.getSearchInput()).toBeUndefined();
    mdl.context.setSearchInput(context);
    expect(mdl.context.getSearchInput()).toEqual(context);
  });

  test("search results context", () => {
    const context = generateSearchResultsContext();
    expect(mdl.context.getSearchResults()).toBeUndefined();
    mdl.context.setSearchResults(context);
    expect(mdl.context.getSearchResults()).toEqual(context);
  });

  test("shopper context", () => {
    const context = generateShopperContext();
    expect(mdl.context.getShopper()).toBeUndefined();
    mdl.context.setShopper(context);
    expect(mdl.context.getShopper()).toEqual(context);
  });

  test("shopping cart context", () => {
    const context = generateShoppingCartContext();
    expect(mdl.context.getShoppingCart()).toBeUndefined();
    mdl.context.setShoppingCart(context);
    expect(mdl.context.getShoppingCart()).toEqual(context);
  });

  test("storefront instance context", () => {
    const context = generateStorefrontInstanceContext();
    expect(mdl.context.getStorefrontInstance()).toBeUndefined();
    mdl.context.setStorefrontInstance(context);
    expect(mdl.context.getStorefrontInstance()).toEqual(context);
  });
});
