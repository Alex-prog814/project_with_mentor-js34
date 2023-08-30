import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  editProduct,
} from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";

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

  console.log(product);

  return (
    <>
      {loading ? (
        <h3>....LOadinh</h3>
      ) : (
        <>
          {product && (
            <>
              <h3>{product.name}</h3>
              <input
                type="text"
                placeholder="Picture"
                onChange={(e) =>
                  setProduct({ ...product, picture: e.target.value })
                }
                value={product.picture}
              />
              <img src={product.picture} alt="" width="100" height="100" />
              <input
                type="number"
                placeholder="Price"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                value={product.price}
              />
              <button
                onClick={() => {
                  dispatch(editProduct(product));
                  navigate("/products");
                }}
              >
                Save Changes
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductEdit;
