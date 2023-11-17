const getDataFromLocal = () => {
  let shoppingData = {};
  const dbLocal = JSON.parse(localStorage.getItem('shoppingId'));
  if (dbLocal) {
    shoppingData = dbLocal;
  }
  return shoppingData;
};

const setDataDb = id => {
  const dataLocal = getDataFromLocal();
  const quantity = dataLocal[id];
  if (quantity) {
    dataLocal[id] = quantity + 1;
    localStorage.setItem('shoppingId', JSON.stringify(dataLocal));
  } else {
    dataLocal[id] = 1;
    localStorage.setItem('shoppingId', JSON.stringify(dataLocal));
  }
};

export { getDataFromLocal, setDataDb };
