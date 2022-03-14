import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user ,setUser } = useContext(UserContext);

  return (
    <>
      <h1>About Screen</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
        className="btn btn-primary"
        onClick={() => setUser({ name: "Esteban", id: 824 })}
      >
        Login
      </button>
    </>
  );
};
