import React from 'react';
import './products.css';
import cart from '../../icons/Icon.svg';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { checkUserLogin } from '../../helpers/functions';

const ProductItem = ({ product }) => {

  const { name, description, price, picture, type, id } = product;

  const navigate = useNavigate();

  return (
      <div className="card">
          <img onClick={() => navigate(/products/${id})} src={picture} alt={name} />
          <p className='category'>{type}</p>
          <div className='down'>
          <div onClick={() => navigate(/products/${id})} className='name'>{name}</div>
          <hr className='line' />
          <div onClick={() => navigate(/products/${id})} className='price'>{price}$</div>
          {checkUserLogin() && (
            <div className='buttons'>
            <button className='cart'><img src={cart} alt="cart" /></button>
            <div className='edit_delete'>
            <button onClick={() => navigate(/product-edit/${id})} className="edit__btn">
                <FaEdit />
              </button>
              <button className="delete__btn">
                <FaTrash />
              </button>
              </div>
            </div>
          )}
          </div>
      </div>
  );
};

export default ProductItem;