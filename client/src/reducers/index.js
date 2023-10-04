import { combineReducers } from "redux";

import auth from "./auth.js";
import productType from "./product_type.js";
import product from "./product.js";
import process from "./process";
import user from "./user";

export const reducers = combineReducers({
  auth,
  productType,
  product,
  process,
  user,
});
