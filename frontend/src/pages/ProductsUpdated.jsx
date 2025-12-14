import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Star, ShoppingCart, Filter } from 'lucide-react';
import { mockProducts } from '../mock';
import OrderModal from '../components/OrderModal';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('cat');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'All');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Pressure Washers', 'Car Care Products', 'Vacuums', 'Polishing Tools', 'Accessories'];

  const filteredProducts = mockProducts
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="page-products">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Shop Products</h1>
          <p className="page-description">
            Premium car care products delivered to your doorstep
          </p>
          <div className="trust-badge">
            <p>✔️ Shipped by our third-party logistics partners</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="products-filters">
        <div className="container">
          <div className="filters-wrapper">
            <div className="filter-group">
              <Filter size={20} />
              <span className="filter-label">Category:</span>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <span className="filter-label">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-content">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  {product.inStock ? (
                    <span className="product-badge in-stock">In Stock</span>
                  ) : (
                    <span className="product-badge out-of-stock">Out of Stock</span>
                  )}
                </div>
                <div className="product-content">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <div className="product-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                      <span>({product.rating})</span>
                    </div>
                    <span className="product-price">₹{product.price.toLocaleString()}</span>
                  </div>
                  <button 
                    className="btn-primary btn-full-width" 
                    disabled={!product.inStock}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <ShoppingCart size={18} />
                    {product.inStock ? 'Buy Now' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {selectedProduct && (
        <OrderModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Products;