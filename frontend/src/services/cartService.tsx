export const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
  export const addToCart = (product: { id: number; name: string; price: number; image: string }) => {
    const cart = getCart();
    const existingItem = cart.find((item: any) => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  };
  
  export const updateCartItem = (productId: number, quantity: number) => {
    let cart = getCart();
    cart = cart.map((item: any) => (item.id === productId ? { ...item, quantity } : item));
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  };
  
  export const removeFromCart = (productId: number) => {
    let cart = getCart().filter((item: any) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  };
  
  export const clearCart = () => {
    localStorage.removeItem("cart");
  };
  