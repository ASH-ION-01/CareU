import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ShoppingPage({ products }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addItemToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          setCart(updatedCart);
        } else {
          setCart([...cart, { ...product, quantity: 1 }]);
        }
        setTotal(total + product.price);
  };

  const removeItemFromCart = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter((item) => item.quantity > 0);
  
    if (updatedCart.length === 0) {
      setTotal(0); 
    } else {
      const removedItem = cart.find((item) => item.id === productId);
      setTotal(total - removedItem.price);
    }
  
    setCart(updatedCart);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const Addhandler = (product) => {
    addItemToCart(product);
  };

  const Removehandler = (product) => {
    removeItemFromCart(product.id);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container mx-auto ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="flex justify-between items-center mt-12 bg-white rounded-md shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="border-none focus:outline-none px-4 py-2 text-gray-700 placeholder-gray-500 w-full"
        />
        <button className="flex-shrink-0 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">Search</button>
        <button onClick={toggleDarkMode} className="flex-shrink-0 px-4 py-2 bg-gray-500 text-white hover:bg-gray-600 focus:outline-none">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
          >
            <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-green-700 font-semibold">${product.price}</div>
                <div className="flex items-center">
                  {cart.some((p) => p.id === product.id) ? (
                    <>
                      <button onClick={() => Removehandler(product)} className="border border-gray-300 rounded-full px-2 py-1 mr-2">-</button>
                      <span className="mr-2">{cart.find((p) => p.id === product.id).quantity}</span>
                      <button onClick={() => Addhandler(product)} className="border border-gray-300 rounded-full px-2 py-1">+</button>
                    </>
                  ) : (
                    <button onClick={() => Addhandler(product)} className="bg-blue-500 text-white px-4 py-2 rounded-full">Add to Cart</button>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              <p className="text-sm text-gray-500">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black p-4 rounded-lg shadow-lg text-white mt-8 hover:bg-neutral-700 mb-3">
        <h2 className="text-lg font-bold mb-2">Cart</h2>
        <p className="text-yellow-400 mb-2">Total: ${total}</p>
        <p className="text-yellow-400">Total Products: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
        {cart.length > 0 && (
          <NavLink to='/Payment_gate'><button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">Proceed to Payment</button></NavLink>
        )}
      </div>
    </div>
  );
}

export default ShoppingPage;
