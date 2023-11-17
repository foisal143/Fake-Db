import React from 'react';

const Cartsummary = props => {
  const { datas } = props;

  let total = 0;
  let quantity = 0;
  for (const data of datas) {
    // data.quantity = data.quantity || 1;
    total = total + parseFloat(data.price) * data.quantity;
    quantity = quantity + parseInt(data.quantity);
  }
  const tax = (total * 5) / 100;
  const grandTotal = total + tax;
  return (
    <div>
      <p>Added Product:{quantity}</p>
      <p>Total: ${total.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cartsummary;
