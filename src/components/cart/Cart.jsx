import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../store/cart/cartSlice';
import { changeCountProductInCart, deleteProductFromCart, cleanCart } from '../../helpers/functions';

const Cart = () => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div>
      {cart && (
        <>
          {cart.products.length ? (
            <>
              <table border="2">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                  <th>Price for one</th>
                  <th>Count</th>
                  <th>Total cost</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.products.map(product => (
                  <tr>
                    <td>
                      { product.productItem.name }
                    </td>
                    <td>
                      <img src={product.productItem.picture} alt="error:(" width="50" height="50" />
                    </td>
                    <td>
                      { product.productItem.price }
                    </td>
                    <td>
                      <input type="number" value={product.count} onChange={(e) => {
                        changeCountProductInCart(product.productItem.id, +e.target.value);
                        dispatch(getCart());
                      }} />
                    </td>
                    <td>
                      { product.totalCost }
                    </td>
                    <td>
                      <button onClick={() => {
                        deleteProductFromCart(product.productItem.id);
                        dispatch(getCart());
                      }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
              <h3>Total cost: ${cart.totalCost}</h3>
              <button onClick={() => {
                cleanCart();
                dispatch(getCart());
              }}>Clean cart</button>
            </>
          ) : (
            <h3>Cart is empty!</h3>
          )}
        </>
      )}
    </div>
  )
}

export default Cart