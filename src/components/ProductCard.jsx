import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleInputChange = (e) => {
        const value = Math.max(1, Number(e.target.value)); // Ensure quantity is at least 1
        setQuantity(value);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div>
            <h3>{product.title}</h3>
            <img
                src={product.image}
                alt={`Image of ${product.title}`}
                width="100"
            />
            <p>${product.price}</p>
            <div>
                <button onClick={handleDecrease} disabled={quantity <= 1}>
                    -
                </button>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleInputChange}
                    min="1" // Enforce minimum value in the input field
                />
                <button onClick={handleIncrease}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;