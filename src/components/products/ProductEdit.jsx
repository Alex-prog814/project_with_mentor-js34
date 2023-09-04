import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getOneProduct,
    editProduct,
} from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";
import styles from "./styles/Edit.module.css";

const ProductEdit = () => {
    const { loading, oneProduct } = useSelector((state) => state.products);
    const [product, setProduct] = useState(oneProduct);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getOneProduct({ id }));
        return () => dispatch(clearOneProductState());
    }, []);

    useEffect(() => {
        if (oneProduct) {
            setProduct(oneProduct);
        }
    }, [oneProduct]);

    return (
        <>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    {product && (
                        <div className={styles.edit_form}>
                            <h2>Edit form</h2>
                            <div className={styles.second_div}>
                                <h4>Name:</h4>
                                <input
                                    className={styles.edit_input}
                                    type="text"
                                    placeholder="Name"
                                    onChange={(e) =>
                                        setProduct({
                                            ...product,
                                            name: e.target.value,
                                        })
                                    }
                                    value={product.name}
                                />
                                <h4>Picture:</h4>
                                <input
                                    className={styles.edit_input}
                                    type="text"
                                    placeholder="Picture"
                                    onChange={(e) =>
                                        setProduct({
                                            ...product,
                                            picture: e.target.value,
                                        })
                                    }
                                    value={product.picture}
                                />
                                <img
                                    className={styles.image_prev}
                                    src={product.picture}
                                    alt=""
                                />
                                <h4>Description:</h4>
                                <input
                                    className={styles.edit_input}
                                    type="text"
                                    placeholder="Description"
                                    onChange={(e) =>
                                        setProduct({
                                            ...product,
                                            description: e.target.value,
                                        })
                                    }
                                    value={product.description}
                                />
                                <h4>Category:</h4>
                                <input
                                    className={styles.edit_input}
                                    type="text"
                                    placeholder="Category"
                                    onChange={(e) =>
                                        setProduct({
                                            ...product,
                                            type: e.target.value,
                                        })
                                    }
                                    value={product.type}
                                />
                                <h4>Price:</h4>
                                <input
                                    className={styles.edit_input}
                                    type="number"
                                    placeholder="Price"
                                    onChange={(e) =>
                                        setProduct({
                                            ...product,
                                            price: e.target.value,
                                        })
                                    }
                                    value={product.price}
                                />
                            </div>

                            <button
                                className={styles.edit_btn}
                                onClick={() => {
                                    dispatch(editProduct(product));
                                    navigate("/products");
                                }}
                            >
                                Save
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default ProductEdit;
