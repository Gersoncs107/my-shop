import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Minha Loja</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/shop" className="hover:text-gray-300">Shop</Link>
      </div>
      <div className="flex items-center">
        <Link to="/shop" className="flex items-center">
          🛒 <span className="ml-1">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
