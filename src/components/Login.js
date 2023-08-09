import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../AuthContext";
import { auth } from "../firebase";

const LogIn = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (values.email === "" || values.password === "") {
      return;
    }

    setErrorMsg("");

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log("User logged in with credentials : ",user);
        dispatch({ type: "LOGIN", payload: user });
        navigate("/quizzes");
      })
      .catch((e) => {
        console.error("Error logging in : ",e)
        setErrorMsg("Error logging in");
      });
  };

  return (
    <div className="p-6 text-white flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="w-80 bg-custom-red p-6 rounded shadow">
          <h1 className="text-white text-2xl font-bold  mb-6 text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white text-white rounded px-3 py-2 focus:outline-0"
                value={values.email}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-custom-black font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-white text-white rounded px-3 py-2 focus:outline-0"
                value={values.password}
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="flex justify-center items-center text-xs my-2">
              <span className="text-gray-600">Don't have an account?</span>&nbsp;&nbsp;
              <span
                className="text-white font-bold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </div>
            {errorMsg && <p className="text-red-500 mt-2 mb-2 text-sm flex justify-center">{errorMsg}</p>}

            <button
              type="submit"
              className="w-full bg-custom-black text-white rounded py-2 hover:bg-white hover:text-custom-black"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
