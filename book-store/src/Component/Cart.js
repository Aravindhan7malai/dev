import React, { useState } from "react";

export const Cart = ({ cart, item }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    billingAddress: ""
  });

  if (!cart) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let bookname = item.volumeInfo.title;
  let author = item.volumeInfo.authors;
  let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Payment Information Submitted", paymentInfo);
    alert("Payment processed successfully!");
    window.location.reload();
  };

  return (
    <div className="cartpage">
      <h1>Cart Page</h1>
      <div className="cart-container">
        <div className="book-details">
          <div className="cart_image">
            <img src={thumbnail} alt={bookname} />
          </div>
          <h1>{bookname}</h1>
          <h3>{author}</h3>
          <h2 className="cart_price">&#8377; {amount}</h2>
        </div>
        <div className="payment-section">
          <h2>Payment Information</h2>
          <form onSubmit={handlePayment}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={paymentInfo.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={paymentInfo.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="billingAddress">Billing Address</label>
              <textarea
                id="billingAddress"
                name="billingAddress"
                value={paymentInfo.billingAddress}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="payment-btn">Process Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
};
