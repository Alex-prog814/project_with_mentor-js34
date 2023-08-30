import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../store/products/productsActions';


const ProductCreate = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        picture: '',
        price: '',
        type: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  return (
    <div>
        <input type="text" placeholder="Product name" onChange={(e) => setProduct({ ...product, name: e.target.value })} />

        <input type="text" placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} />

        <input type="url" placeholder="Picture" onChange={(e) => setProduct({ ...product, picture: e.target.value })} />

        <input type="number" placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} />

        <input type="text" placeholder="Category" onChange={(e) => setProduct({ ...product, type: e.target.value.toLowerCase() })} />

        <button onClick={() => {
            dispatch(createProduct(product));
            navigate('/products');
        }}>Create</button>
    </div>
  )
}

export default ProductCreate