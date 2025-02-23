import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, updateItem, removeItem, clearCartItems } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
              <span className="flex-1 ml-4">{item.name}</span>
              <span>${item.price}</span>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateItem(item.id, parseInt(e.target.value))}
                className="w-16 text-center border rounded-md mx-2"
              />
              <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button onClick={clearCartItems} className="bg-gray-500 text-white px-4 py-2 rounded">
              Clear Cart
            </button>
            <button onClick={() => navigate("/checkout")} className="bg-blue-500 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
