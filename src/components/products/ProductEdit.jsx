import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, editProduct } from '../../store/products/productsActions';
import { clearOneProductState } from '../../store/products/productsSlice';

const ProductEdit = () => {
  const { loading, oneProduct } = useSelector(state => state.products);
  const [product, setProduct] = useState(oneProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
  }, []);

  useEffect(() => {
    if(oneProduct) {
      setProduct(oneProduct);
    };
  }, [oneProduct]);

  console.log(product);

  return (
    <div>ProductEdit</div>
  )
}

export default ProductEdit