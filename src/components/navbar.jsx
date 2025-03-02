import { Link } from "react-router-dom";

const Navbar = ({cartCount})=> {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
        </nav>
    )
}