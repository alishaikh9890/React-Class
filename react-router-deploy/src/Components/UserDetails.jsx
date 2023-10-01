import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import User from "../assets/social-media.gif"

const UserData = styled.div`
  padding: 2vh;
  display: flex;
  justify-content: space-evenly;

  & > div {
    margin: auto;
    text-align: start;
  }
`;

const UserDetails = () => {
  const { id } = useParams();

  const [userDetails, setUserDetails] = React.useState({});
  const [loading, setLoading] = React.useState(true)
  const [error , setError] = React.useState(false)

  React.useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUserDetails(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [id]);

  console.log(userDetails);

  return (
    <UserData>
    {
      loading ? (
        <img src={User} alt="" />
      ) : error ? (
        <h1>something went wrong</h1>
      ) : (
<div>
      <img src={userDetails.avatar} />

      <div>
        <h3>Name: {userDetails.first_name + " " + userDetails.last_name}</h3>
        <p>
          E-mail: <a href="">{userDetails.email}</a>
        </p>
      </div>
      </div>
      )
    }
    </UserData>
  );
};

export default UserDetails;
