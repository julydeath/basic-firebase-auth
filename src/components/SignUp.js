import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, user } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password);
  };

  return (
    <div>
      <h1>SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="passowrd"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>signup</button>
      </form>
    </div>
  );
};

export default SignUp;
