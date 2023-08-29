import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../products/productsActions";
import ProductItem from "./ProductItem";

const ProductsList = () => {
    const { products, loading } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    console.log(products);

    return (
        <>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </>
            )}
        </>
    );
};

export default ProductsList;
