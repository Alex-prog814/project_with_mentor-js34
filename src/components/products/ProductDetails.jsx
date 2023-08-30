import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../store/products/productsActions';
import { clearOneProductState } from '../../store/products/productsSlice';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { loading, oneProduct } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getOneProduct({ id }));
        return () => dispatch(clearOneProductState());
    }, []);

  return (
    <>
        {loading ? (
            <h3>Loading...</h3>
        ) : (
            <>
                {oneProduct && (
                    <div>
                        <h3>{ oneProduct.name }</h3>
                        <img src={oneProduct.picture} alt="error:(" width="350" height="350" />
                    </div>
                )}
            </>
        )}
    </>
  )
}

export default ProductDetails