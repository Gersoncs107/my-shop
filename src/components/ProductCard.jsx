import { useState } from "react";

const ProductCard = ({product, addToCart})=> {
    const [quantity, setQuantity] = useState(1)
    
    return(
        <div>
            <h3>{product.tittle}</h3>
            <img src={product.image} alt={product.title} width="100" />
        </div>
    )
}