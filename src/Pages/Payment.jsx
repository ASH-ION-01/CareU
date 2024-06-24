import React, { useState } from 'react';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission to your payment gateway
    console.log('Submitting payment...');
  };

  const renderPaymentDetails = () => {
    if (paymentMethod === 'debitCard') {
      return (
        <>
          <div>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div>
            <label htmlFor="expiry">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              placeholder="123"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Cardholder Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
        </>
      );
    } else if (paymentMethod === 'netBanking') {
      return (
        <p>
          Please select your bank:
          {/* Add your net banking bank options here */}
          <a href="#">Bank 1</a> | <a href="#">Bank 2</a> | <a href="#">Bank 3</a>
        </p>
      );
    }
    return null;
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <div>
        <button onClick={() => handlePaymentMethodChange('debitCard')}>Debit Card</button>
        <button onClick={() => handlePaymentMethodChange('netBanking')}>Net Banking</button>
      </div>
      <form onSubmit={handlePaymentSubmit}>
        {renderPaymentDetails()}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
