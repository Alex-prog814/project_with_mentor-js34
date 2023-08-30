import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsActions';
import ProductItem from './ProductItem';
import './products.css';

const ProductsList = () => {
    const { products, loading } = useSelector(state => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

  return (
    <>
        { loading ? (
            <h3>Loading...</h3>
        ) : (
            <div className='card_list'>
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        ) }
    </>
  )
}

export default ProductsList