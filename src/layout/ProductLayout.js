import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductLayout = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch(error) {
        console.error("Error fetching Products:", error);
      }
    };

    loadProducts();
  }, []);

  //handle Add to cart
  const handleAddToCart = (product) => {
    addToCart(product); //Add product to cart

    //Toast notification
    toast.success(`${product.title} added to your Cart.!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });  
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <a
                  href={`/products/${product.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Product
                </a>
                <button 
                  className="btn btn-outline-primary m-3 ml-sm-2"
                  onClick={() => handleAddToCart(product)}    
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductLayout;
