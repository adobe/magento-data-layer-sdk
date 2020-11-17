import { MagentoDataLayerBase } from "./MagentoDataLayerBase";

import { ADD_TO_CART } from "./eventNames";
import { MagentoDataLayerEventHandler } from "./types";
import { MagentoDataLayer } from ".";

export default class MagentoDataLayerUnsubscribeManager extends MagentoDataLayerBase {
  constructor(mdl: MagentoDataLayer) {
    super();
    this.mdl = mdl;
  }
  /**
   *  Unsubscribe from Add to Cart event
   */
  addToCart(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(ADD_TO_CART, handler);
  }
}
