import React from 'react';
import './Data.css';
const Data = props => {
  const handaleCart = props.handaleCart;
  const { id, name, picture, price } = props.data;
  return (
    <div className="card">
      <img src={picture} alt="" />
      <div className="cardDetails">
        <h4>{name}</h4>
        <p>${price}</p>
        <button onClick={() => handaleCart(props.data)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Data;
