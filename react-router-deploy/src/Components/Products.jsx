import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Cart from "../assets/shopping-cart.gif"

const Product = styled.div`
  & table td {
  }

  & table td:nth-child(1) {
    text-align: start;
    overflow: scroll;
  }
`;

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  React.useEffect(() => {

    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Product>
    {loading ? (
      <img src={Cart} alt="" />
    ) : error ? (
      <h1>something went wrong</h1>
    ) : (

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}  INR</td>
                <td><Link to={`/products/${product.id}`}>More...</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
    </Product>
  )
}

export default Products;
