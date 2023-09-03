import axios from 'axios';
import { ACCOUNT_API } from './consts';

export const addDataToLocalStorage = (user, tokens) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const updateToken = () => {
    let updateFunc = setInterval(async () => {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        if(!tokens) return clearInterval(updateFunc);
        const Authorization = `Bearer ${tokens.access}`;
        let res = await axios.post(`${ACCOUNT_API}/api/token/refresh/`, { refresh: tokens.refresh }, { headers: { Authorization } });
        localStorage.setItem('tokens', JSON.stringify({ refresh: tokens.refresh, access: res.data.access }));
    }, 1000 * 60 * 9);
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('tokens');
};

export const checkUserLogin = () => {
    let user = localStorage.getItem('user');
    if(!user) return false;
    return true;
};


// cart 

export const getCartData = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart) return {
    user: '',
    totalCost: 0,
    products: []
  }
  return cart;
}

export const setCartData = (cartObj) => {
  cartObj.user = JSON.parse(localStorage.getItem('user'));
  localStorage.setItem('cart', JSON.stringify(cartObj));
}

export const checkProductInCart = (productId) => {
  const cart = getCartData();
  return cart.products.find(product => product.productItem.id === productId)
}

export const countCartTotalCost = (cartProducts) => {
  return cartProducts.reduce((acc, currVal) => {
    return acc + currVal.totalCost;
  })
}

//export const addProductToCart = (productId) => {
//  const cart = getCartData();
//  if(!checkProductInCart(productObj.id)) {
//    cart.products.push({
//      const: 1,
//      totalCost: +productObj.price,
//      productItem: productObj
//    })
//  } else {
//    cart.products = cart.products.filter(item => item.productItem.id !== productObj.id);
//  }
//  cart.totalCost = 
//}