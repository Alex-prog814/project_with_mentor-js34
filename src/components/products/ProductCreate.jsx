
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../store/products/productsActions";
import styles from "./styles/Create.module.css";

const ProductCreate = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    picture: "",
    price: "",
    type: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.create__main}>
      <div className={styles.create__panel}>
        <h3>Create Card</h3>
        <input
          className={styles.create__input}
          type="text"
          placeholder="Name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          className={styles.create__input}
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <input
          className={styles.create__input}
          type="url"
          placeholder="Picture"
          onChange={(e) => setProduct({ ...product, pisture: e.target.value })}
        />
        <input
          className={styles.create__input}
          type="number"
          placeholder="Price"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          className={styles.create__input}
          type="text"
          placeholder="Category"
          onChange={(e) =>
            setProduct({ ...product, type: e.target.value.toLowerCase() })
          }
        />

        <button
          className={styles.create__btn}
          onClick={() => {
            dispatch(createProduct(product));
            navigate("/products");
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ProductCreate;