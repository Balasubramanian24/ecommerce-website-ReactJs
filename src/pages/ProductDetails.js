import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }
        const data = await response.json();
        setProduct(data); 
      } catch (error) {
        setError(error.message); 
      }
    };

    fetchProduct();
  }, [id]);


  if (error) {
    return <div className="text-center mt-5">Error: {error}</div>;
  }
  if (!product) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{product.title}</h1>
          <p className="lead">{product.description}</p>
          <h4 className="text-success">${product.price}</h4>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating} ★
          </p>
          <p>
            <strong>Stock:</strong> {product.stock} units available
          </p>
          <button className="btn btn-primary btn-md">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
