import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";
import style from "../../styles/productDetails.module.css";

const ProductDetails = () => {
    const { loading, oneProduct } = useSelector((state) => state.products);

    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getOneProduct({ id }));
        return () => dispatch(clearOneProductState());
    }, []);

    console.log(oneProduct);

    return (
        <>
            {loading ? (
                <h3>Loading</h3>
            ) : (
                <>
                    {oneProduct && (
                        <div className={style.product__details}>
                            <img
                                src={oneProduct.picture}
                                alt=""
                                width="350"
                                height="350"
                            />
                            <h3>{oneProduct.name}</h3>
                            <h3>{oneProduct.price} USD </h3>
                            <p className={style.product__details_desc}>
                                {oneProduct.description}
                            </p>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default ProductDetails;
