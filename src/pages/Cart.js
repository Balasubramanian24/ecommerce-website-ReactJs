import { useCart } from "../context/CartContext"; // Import the custom hook

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Use the custom hook

  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="text-center">ID</th>
              <th scope="col">Item</th>
              <th scope="col" className="text-center">Quantity</th>
              <th scope="col" className="text-center">Unit Price</th>
              <th scope="col" className="text-center">Total Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.id}</td>
                <td>{item.title}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-center">${item.price}</td>
                <td className="text-center">
                  ${(item.quantity && item.price)
                    ? (item.quantity * item.price).toFixed(2)
                    : '0.00'}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)} // Remove from cart
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
