import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch(`http://localhost:3004/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  });

  return (
    <Product>
      {
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price} INR</td>
                <td>
                  <Link to={`/products/${product.id}`}>More...</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </Product>
  )
}

export default Products;
