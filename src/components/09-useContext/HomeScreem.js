import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreem = () => {


  const {user, setUser} = useContext(UserContext);
  console.log(user);

  


  return (
    <>
      <h1>HomeScreem</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>


    </>
  );
};
