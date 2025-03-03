import { useState } from "react";

const ProductCard = ({product, addToCart})=> {
    const [quantity, setQuantity] = useState(1)
    
    return(
        <div>
            <h3>{product.tittle}</h3>
            <img src={product.image} alt={product.title} width="100" />
            <p>${product.price}</p>
            <div>
                <button onClick={()=> setQuantity(quantity -1)} disabled= {quantity <= 1}>-</button>
                <input 
                type="number"
                value={quantity}
                onChange={(e)=>setQuantity(Number(e.target.value))} />
                <button onClick={()=> setQuantity(quantity + 1)}>+</button>
            </div>
        </div>
    )
}