import { createContext, useContext, useState } from "react";

const CartContext= createContext()

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState([])
}