import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsServices";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import '../styles/home.css'
import Categories from "../components/Categories";

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data: Product[]) => {
      setFeaturedProducts(data.slice(0, 5));
    });
  }, []);

  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1>Welcome to ShopSphere</h1>
          <p>Your one-stop shop for everything you need</p>
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
          </div>
        </div>
      </header>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <Link to={`/products/${product.id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <Categories/>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 ShopSphere. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;