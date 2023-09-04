import axios from 'axios';
import { ACCOUNT_API, PRODUCTS_API } from './consts';

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
    };
    return cart;
};

export const setCartData = (cartObj) => {
    cartObj.user = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('cart', JSON.stringify(cartObj));
};

export const checkProductInCart = (productId) => {
    const cart = getCartData();
    return cart.products.find(product => product.productItem.id === productId);
};

export const countCartTotalCost = (cartProducts) => {
    return cartProducts.reduce((acc, currVal) => {
        return acc + currVal.totalCost;
    }, 0);
};

export const addProductToCart = (productObj) => {
    const cart = getCartData();
    if(!checkProductInCart(productObj.id)) {
        cart.products.push({
            count: 1,
            totalCost: +productObj.price,
            productItem: productObj
        });
    } else {
        cart.products = cart.products.filter(item => item.productItem.id !==productObj.id);
    };
    cart.totalCost = countCartTotalCost(cart.products);
    setCartData(cart);
};

export const countProductTotalCost = (productItem, count) => {
    return productItem.price * count;
};

export const changeCountProductInCart = (productId, count) => {
    if(count <= 0) return alert('Count of product must be positiove int!');
    const cart = getCartData();
    cart.products = cart.products.map(item => {
        if(item.productItem.id === productId) {
            item.count = count;
            item.totalCost = countProductTotalCost(item.productItem, count);
        };
        return item;
    });
    cart.totalCost = countCartTotalCost(cart.products);
    setCartData(cart);
};

export const deleteProductFromCart = (productId) => {
    const cart = getCartData();
    cart.products = cart.products.filter(product => product.productItem.id !== productId);
    cart.totalCost = countCartTotalCost(cart.products);
    setCartData(cart);
};

export const cleanCart = () => {
    localStorage.removeItem('cart');
};

export const getProductsCountInCart = () => {
    const cart = getCartData();
    return cart.products.length;
};

export const getCategories = async () => {
    const { data } = await axios.get(`${PRODUCTS_API}`);
    const uniqueCategories = new Set(data.map(product => product.type));
    const categories = [];
    for(let i of uniqueCategories) {
        categories.push(i);
    };
    return categories;
};

export const getTotalPages = async (url) => {
    const { data } = await axios.get(url);
    const totalPages = Math.ceil(data.length / 12);
    return totalPages;
};