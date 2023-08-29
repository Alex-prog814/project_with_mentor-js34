import React from 'react';
import './products.css';
import cart from '../../icons/Icon.svg';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductItem = ({ product }) => {

  const { name, description, price, picture, type, id } = product;


  return (
      <div className="card">
          <img src={picture} alt={name} />
          <p className='category'>{type}</p>
          <div className='down'>
          <div className='name'>{name}</div>
          <div className='price'>{price}$</div>
          <div className='buttons'>
            <button className='cart'><img src={cart} alt="cart" /></button>
            <div className='edit_delete'>
            <button className="edit__btn">
                <FaEdit />
                </button>
              <button className="delete__btn">
                <FaTrash />
              </button>
              </div>
          </div>
          </div>
      </div>
  );
};

export default ProductItem;
