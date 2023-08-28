import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

  React.useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUserDetails(res.data));
  }, [id]);

  console.log(userDetails);

  return (
    <UserData>
      <img src={userDetails.avatar} />

      <div>
        <h3>Name: {userDetails.first_name + " " + userDetails.last_name}</h3>
        <p>
          E-mail: <a href="">{userDetails.email}</a>
        </p>
      </div>
    </UserData>
  );
};

export default UserDetails;
