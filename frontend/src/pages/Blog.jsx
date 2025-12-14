import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock } from 'lucide-react';
import { mockBlogPosts } from '../mock';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Pressure Washing', 'Car Care', 'Tools & Equipment', 'Product Comparison'];

  const filteredPosts = mockBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-blog">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Educational Blog</h1>
          <p className="page-description">
            Learn everything about car care, pressure washing, and detailing tools
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="blog-filters">
        <div className="container">
          <div className="search-bar-wrapper">
            <div className="search-input-group">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-content">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-category-badge">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span className="blog-meta-item">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="blog-meta-item">
                        <Clock size={16} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="blog-read-more">
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;