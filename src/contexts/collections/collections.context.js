//this context will only store collection object
import { createContext } from "react";
import SHOP_DATA from "./shop.data";

//create a new context called CollectionsContext that stores this SHOP_DATA
/*
 This will be the initial value of our context.
 We can of course set the context dynamically, but not for now.
*/
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;