import { combineReducers } from "redux";

import auth from "./auth.js";
import productType from "./product_type.js";
import product from "./product.js";

export const reducers = combineReducers({ auth, productType, product });
