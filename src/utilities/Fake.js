import Toastify from 'toastify-js'
// use local storage to manage cart data
const addToDb = (id) => {
  let manCart = getmanCart();
  // add quantity
  const quantity = manCart[id];
  if (!quantity) {
    manCart[id] = 1;
    Toastify({
      text: "Successful",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center", 
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, ##988B18, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  } else {
    Toastify({
      text: "Added",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "center", 
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, #dab3bb, #FF6000)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }
  localStorage.setItem("man-cart", JSON.stringify(manCart));
};



const removeFromDb = (id) => {
  const manCart = getmanCart();
  if (id in manCart) {
    delete manCart[id];
    localStorage.setItem("man-cart", JSON.stringify(manCart));
  }
};

const getmanCart = () => {
  let manCart = {};

  //get the man cart from local storage
  const storedCart = localStorage.getItem("man-cart");
  if (storedCart) {
    manCart = JSON.parse(storedCart);
  }
  return manCart;
};

const deletemanCart = () => {
  localStorage.removeItem("man-cart");
};

export { addToDb, removeFromDb, getmanCart, deletemanCart };
