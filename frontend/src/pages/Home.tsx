import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsServices";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import '../styles/home.css'

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
        <h2>Shop by Category</h2>
        <div className="category-list">
          <Link to="/categories/1/products" className="category-card">
            <img src="/images/electronics.jpg" alt="Electronics" />
            <span>Electronics</span>
          </Link>
          <Link to="/categories/2/products" className="category-card">
            <img src="/images/beauty.jpg" alt="Beauty" />
            <span>Beauty</span>
          </Link>
          <Link to="/categories/3/products" className="category-card">
            <img src="/images/food.jpg" alt="Food" />
            <span>Food</span>
          </Link>
          <Link to="/categories/4/products" className="category-card">
            <img src="/images/utensils.jpg" alt="Utensils" />
            <span>Utensils</span>
          </Link>
          <Link to="/categories/5/products" className="category-card">
            <img src="/images/cars.jpg" alt="Cars" />
            <span>Cars</span>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 ShopSphere. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;