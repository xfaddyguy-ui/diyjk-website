import React, { useState } from 'react';
import { X } from 'lucide-react';

const OrderModal = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: 1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For frontend-only deployment, show contact message
    alert(
      `Thank you for your interest in ${product.name}!\n\n` +
      `Since this is a demo website, orders are not processed automatically.\n\n` +
      `Please contact us directly:\n` +
      `📧 Email: contact@diyjk.com\n` +
      `📱 Phone: +91 98765 43210\n\n` +
      `We'll get back to you within 24 hours!`
    );
    
    onClose();
  };

  const totalAmount = product.price * formData.quantity;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Order: {product.name}</h2>
          <button onClick={onClose} className="modal-close">
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="order-product-info">
            <img src={product.image} alt={product.name} className="order-product-image" />
            <div>
              <p className="order-product-name">{product.name}</p>
              <p className="order-product-price">₹{product.price.toLocaleString()}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
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
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address" className="form-label">Shipping Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="form-textarea"
                placeholder="Your complete shipping address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                max="10"
                required
                className="form-input"
              />
            </div>

            <div className="order-total">
              <span>Total Amount:</span>
              <span className="order-total-amount">₹{totalAmount.toLocaleString()}</span>
            </div>

            <div className="order-info-box">
              <p className="order-info-text">
                📱 <strong>Payment:</strong> After submitting, we'll contact you with UPI payment details.
              </p>
              <p className="order-info-text">
                🚚 <strong>Delivery:</strong> Products are shipped within 2-3 business days.
              </p>
            </div>

            <button type="submit" className="btn-primary btn-full-width">
              Submit Order Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;