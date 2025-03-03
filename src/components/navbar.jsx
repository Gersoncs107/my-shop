import { Link } from "react-router-dom";

const Navbar = ({cartCount})=> { //A prop cartCount exibirá a quantidade de itens no carrinho.
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <span>🛒 {cartCount}</span>
        </nav>
    )
}

export default Navbar