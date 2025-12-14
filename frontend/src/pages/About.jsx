import React, { useState } from 'react';
import { Mail, Phone, MapPin, Youtube, Instagram, Facebook, Send } from 'lucide-react';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-about">
      {/* About Header */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1 className="page-title">About DIY J&K</h1>
              <p className="about-hero-description">
                Welcome to DIY J&K - your trusted source for honest car care product reviews, 
                pressure washer guides, and professional detailing tutorials.
              </p>
            </div>
            <div className="about-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" 
                alt="Mohsin - Founder"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <div className="story-text">
              <p>
                DIY J&K was born from a simple passion: helping people take better care of their vehicles. 
                I'm Mohsin, the founder, and I started this journey after realizing how confusing and 
                overwhelming the world of car care products can be for beginners.
              </p>
              <p>
                What started as a hobby of testing pressure washers and detailing products in my garage 
                has grown into a full-fledged YouTube channel and e-commerce platform. Today, DIY J&K 
                serves thousands of car enthusiasts, beginners, and professional detailers.
              </p>
              <p>
                Our mission is simple: provide honest, unbiased reviews and educational content that 
                helps you make informed decisions about car care products and tools. We test everything 
                ourselves, and we only recommend products we genuinely believe in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-number">01</div>
              <h3 className="mission-title">Educate</h3>
              <p className="mission-description">
                Provide comprehensive tutorials and guides that make car care accessible to everyone, 
                from complete beginners to experienced detailers.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-number">02</div>
              <h3 className="mission-title">Review Honestly</h3>
              <p className="mission-description">
                Test products thoroughly and share honest opinions, highlighting both strengths and 
                weaknesses to help you make the right choice.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-number">03</div>
              <h3 className="mission-title">Build Community</h3>
              <p className="mission-description">
                Create a supportive community where car care enthusiasts can learn, share experiences, 
                and help each other achieve professional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-experience">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="experience-grid">
            <div className="experience-item">
              <h3 className="experience-title">🎬 YouTube Content</h3>
              <p>In-depth product reviews, unboxing videos, comparison tests, and step-by-step tutorials</p>
            </div>
            <div className="experience-item">
              <h3 className="experience-title">📝 Educational Blog</h3>
              <p>Detailed guides on pressure washing, car washing techniques, tool selection, and myth-busting</p>
            </div>
            <div className="experience-item">
              <h3 className="experience-title">🛒 Product Sales</h3>
              <p>Carefully curated products we've tested and recommend, available for direct purchase</p>
            </div>
            <div className="experience-item">
              <h3 className="experience-title">🤝 Consultation</h3>
              <p>Expert advice on choosing the right tools and products for your specific needs and budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-text">
                Have questions? Want to collaborate? Or just want to say hi? 
                We'd love to hear from you!
              </p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <Mail size={24} />
                  <div>
                    <p className="contact-detail-label">Email</p>
                    <a href="mailto:contact@diyjk.com" className="contact-detail-value">contact@diyjk.com</a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <Phone size={24} />
                  <div>
                    <p className="contact-detail-label">Phone</p>
                    <p className="contact-detail-value">+91 98765 43210</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <MapPin size={24} />
                  <div>
                    <p className="contact-detail-label">Location</p>
                    <p className="contact-detail-value">Jammu & Kashmir, India</p>
                  </div>
                </div>
              </div>
              <div className="contact-social">
                <h4 className="contact-social-title">Follow Us</h4>
                <div className="social-links-large">
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link-large">
                    <Youtube size={24} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-large">
                    <Instagram size={24} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link-large">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="contact-form-title">Send Us a Message</h3>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn-primary btn-full-width">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;