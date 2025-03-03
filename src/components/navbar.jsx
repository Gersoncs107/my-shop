import { Link } from "react-router-dom";

const Navbar = ({cartCount})=> { //A prop cartCount exibirá a quantidade de itens no carrinho.
    const { cart } = useCart();
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <span>🛒 {cartCount}</span>
        </nav>
    )
}

export default Navbar