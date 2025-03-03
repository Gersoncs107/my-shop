import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Shop = ()=> {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetchProducts().then(setProducts)
    }, [])

    return(
        <div>
            {products.map((product)=> {
                <ProductCard key={product.id} product={product}/>
            })}
        </div>
    )
}