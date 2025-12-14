import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Play, ArrowRight, Droplets, Sparkles, Wind, CircleDot } from 'lucide-react';
import { mockVideos, mockProducts, mockTestimonials, categories } from '../mock';

const Home = () => {
  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80" 
            alt="Car detailing" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Car Care Pressure Washers Detailing Tools</h1>
          <p className="hero-subtitle">Honest Reviews | Expert Tutorials | Quality Products</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">Shop Now</Link>
            <Link to="/blog" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Categories</h2>
            <p className="section-description">Find the perfect tools for your car care journey</p>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => {
              const IconComponent = { Droplets, Sparkles, Wind, CircleDot }[category.icon];
              return (
                <Link to={`/products?cat=${category.name.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="category-card">
                  <div className="category-image-wrapper">
                    <img src={category.image} alt={category.name} className="category-image" />
                  </div>
                  <div className="category-content">
                    <div className="category-icon">
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="section-videos">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Videos</h2>
            <p className="section-description">Watch our latest reviews and tutorials</p>
          </div>
          <div className="videos-grid">
            {mockVideos.slice(0, 4).map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-play-overlay">
                    <Play size={48} />
                  </div>
                  <span className="video-badge">{video.category}</span>
                </div>
                <div className="video-content">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-views">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Top Recommended Products */}
      <section className="section-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Top Recommended Tools</h2>
            <p className="section-description">Tested and approved by professionals</p>
          </div>
          <div className="products-grid">
            {mockProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  {product.inStock && <span className="product-badge">In Stock</span>}
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
                    <span className="product-price">₹{product.price}</span>
                  </div>
                  <Link to={`/products/${product.id}`} className="btn-primary btn-full-width">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/products" className="btn-secondary">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-about-home">
        <div className="container">
          <div className="about-content-wrapper">
            <div className="about-text">
              <h2 className="section-title">Meet Mohsin</h2>
              <p className="about-description">
                Founder of DIY J&K, passionate about car care and helping beginners and professionals 
                make informed decisions about pressure washers, detailing tools, and car care products.
              </p>
              <p className="about-description">
                With years of experience in product testing and reviews, I'm dedicated to educating 
                the community about proper car washing techniques and debunking common myths.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" 
                alt="Mohsin - Founder of DIY J&K"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by Car Care Enthusiasts</h2>
            <p className="section-description">What our community says</p>
          </div>
          <div className="testimonials-grid">
            {mockTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-author">
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="section-trust">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <h3 className="trust-number">500+</h3>
              <p className="trust-label">Products Reviewed</p>
            </div>
            <div className="trust-item">
              <h3 className="trust-number">50K+</h3>
              <p className="trust-label">YouTube Subscribers</p>
            </div>
            <div className="trust-item">
              <h3 className="trust-number">100+</h3>
              <p className="trust-label">Tutorial Videos</p>
            </div>
            <div className="trust-item">
              <h3 className="trust-number">5★</h3>
              <p className="trust-label">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;