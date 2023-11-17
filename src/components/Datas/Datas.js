import React, { useEffect, useState } from 'react';
import './Datas.css';
import Data from '../Data/Data';
import { getDataFromLocal, setDataDb } from '../../utilitys/utility';
import Cartsummary from '../Cartsummary/Cartsummary';
const Datas = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(datas => setDatas(datas));
  }, []);
  // state for local data
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const addedCart = [];
    const getLocalData = getDataFromLocal();
    for (const id in getLocalData) {
      const addedData = datas.find(data => data.id === id);
      // console.log(datas);
      if (addedData) {
        const quantity = getLocalData[id];
        addedData.quantity = quantity;
        addedCart.push(addedData);
      }
    }

    setCart(addedCart);
  }, [datas]);
  // handlaer for add to cart
  const addToCart = product => {
    // const newData = [...cart, product];
    let newData = [];
    const exist = cart.find(pd => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newData = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const restData = cart.filter(pd => pd.id !== exist.id);
      newData = [...restData, exist];
    }
    setCart(newData);

    setDataDb(product.id);
  };
  console.log(datas);
  return (
    <div className="dataContainer">
      <div className="cardContainer">
        {datas.map(data => (
          <Data data={data} handaleCart={addToCart} key={datas.id}></Data>
        ))}
      </div>
      <div className="cartSummary">
        <Cartsummary datas={cart}></Cartsummary>
      </div>
    </div>
  );
};

export default Datas;
