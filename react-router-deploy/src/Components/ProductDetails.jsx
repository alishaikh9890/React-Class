import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Basket from "../assets/shopping-basket.gif"

const Cart = styled.div`
  width: 200vh;
  display: flex;
  text-align: start;
  border: 1px solid gray;
  padding: 2vh;
  gap: 10px;

  & > div {
    border: 1px solid gray;
    padding: 2vh;
  }
  & img {
    width: 200px;
    border: 1px solid gray;
    padding: 1vh;
  }

  & p {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  & p,
  h2,
  h3,
  h4 {
    margin: auto 0px;
    margin-bottom: 10px;
  }
`;

const ProductDetails = () => {
  const { productId } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState({});

  React.useEffect(() => {
    let isSubscribed = true;
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => {
        return isSubscribed ? setProductDetails(res) : null;
      })

      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [productId]);

  console.log(productDetails);

  if (loading) {
    return <img src={Basket} alt="" />;
  } else if (error) {
    return <h1>something went wrong</h1>;
  } else {
    return (
      <Cart>
        <img src={productDetails.image} />
        <div>
          <p>
            <h3>{productDetails.title}</h3>{" "}
            <h3>⭐️ {productDetails.rating.rate} / 4.0</h3>
          </p>
          <h4>{productDetails.category}</h4>
          <h2>$ {productDetails.price}</h2>
          <p>{productDetails.description}</p>
          <p>
            <h3></h3>{" "}
            <p>
              Only <h3>{productDetails.rating.count}</h3> Items Left
            </p>
          </p>

          <button>Buy Now</button>
        </div>
      </Cart>
    );
  }
};

export default ProductDetails;
