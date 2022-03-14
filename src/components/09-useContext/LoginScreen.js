import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  //1.  Leer el context (useContext)
  //2. Extraer sel SetUser
  //

  const { user, setUser } = useContext(UserContext);

  const handlecambio = () => {
    setUser({
      Name: "David",
      id: 314,
    });
  };

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button className="btn btn-warning" onClick={() => handlecambio()}>
        Login
      </button>
    </>
  );
};
