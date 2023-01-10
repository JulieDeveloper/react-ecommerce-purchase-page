import { createContext } from "react";
export const initialCardInfo = {
  cardHolder:'',
  cardNum:'',
  cardCCV:'',
  cardValid:''
}
export const CardInfoContext = createContext(initialCardInfo)
