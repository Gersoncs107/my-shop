import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bem-vindo à Nossa Loja!</h1>
      <p>Os melhores produtos com os melhores preços.</p>
      <img
        src="https://source.unsplash.com/600x300/?shopping"
        alt="Loja"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
      <br />
      <Link to="/shop">
        <button style={{ marginTop: "20px", padding: "10px 20px", fontSize: "18px" }}>
          Ir para a Loja
        </button>
      </Link>
    </div>
  );
};

export default Home;
