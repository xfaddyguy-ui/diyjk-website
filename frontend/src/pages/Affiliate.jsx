import React, { useState } from 'react';
import { ExternalLink, Filter, Star } from 'lucide-react';
import { mockAffiliateProducts } from '../mock';

const Affiliate = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Pressure Washers', 'Car Care Products', 'Vacuums', 'Accessories'];

  const filteredProducts = mockAffiliateProducts.filter(
    product => selectedCategory === 'All' || product.category === selectedCategory
  );

  return (
    <div className="page-affiliate">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Amazon Recommendations</h1>
          <p className="page-description">
            Mohsin's personally tested and approved products from Amazon
          </p>
          <div className="trust-badge">
            <p>🛒 These are affiliate links - Your support helps us create more content</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="affiliate-filters">
        <div className="container">
          <div className="filter-group">
            <Filter size={20} />
            <span className="filter-label">Filter by Category:</span>
            <div className="category-buttons">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="affiliate-content">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="affiliate-card">
                <div className="affiliate-image-wrapper">
                  <img src={product.image} alt={product.name} className="affiliate-image" />
                  <span className="affiliate-badge">Amazon</span>
                </div>
                <div className="affiliate-content">
                  <span className="affiliate-category">{product.category}</span>
                  <h3 className="affiliate-name">{product.name}</h3>
                  <p className="affiliate-description">{product.description}</p>
                  <div className="affiliate-footer">
                    <span className="affiliate-price">₹{product.price.toLocaleString()}</span>
                  </div>
                  <a 
                    href={product.affiliateLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary btn-full-width"
                  >
                    Buy on Amazon <ExternalLink size={18} />
                  </a>
                  <p className="affiliate-disclaimer">As an Amazon Associate, we earn from qualifying purchases</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="affiliate-info">
        <div className="container">
          <div className="info-card">
            <h2 className="info-title">Why Trust Our Recommendations?</h2>
            <p className="info-text">
              Every product listed here has been personally tested and reviewed by Mohsin. 
              We only recommend products that we genuinely believe provide value for money 
              and deliver on their promises.
            </p>
            <p className="info-text">
              Our recommendations are based on real-world testing, not just specifications. 
              We consider factors like durability, ease of use, value for money, and suitability 
              for both beginners and professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;