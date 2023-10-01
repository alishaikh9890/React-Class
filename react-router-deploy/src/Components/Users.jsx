import React from "react";
import { Link, Navigate } from "react-router-dom";

import styled from "styled-components";
import Connection from "../assets/connection.gif"

const UserDiv = styled.div`
  & table {
    margin: auto;
  }

  & td:nth-child(2) {
    text-align: start;
  }

  & td {
    padding: 1vh 4vh;
  }

  & td:nth-child(2) {
    text-align: start;
  }

  & table h2 {
    text-decoration: none;
    color: black;
    padding: 0 15px;
    font-size: 30px;
    border-radius: 5px;
    margin: auto;
  }

  & table h2:hover {
    background-color: black;
    color: white;
    transition: background-color 1s 0s;
    text-decoration: none;
  }
`;

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true)
  const [error , setError] = React.useState(false)

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/users`)
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, []);

  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <UserDiv>
      <h2>USERS LISTING PAGE</h2>
      {loading ? (
        <img src={Connection} alt="" />
      ) : error ? (
        <h1>somthing went wrong</h1>
      ) : (
    
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name + " " + user.last_name}</td>
              <td>
                {" "}
                <Link to={`/users/${user.id}`}>
                  <h2>➡</h2>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </UserDiv>
  );
};

export default Users;
