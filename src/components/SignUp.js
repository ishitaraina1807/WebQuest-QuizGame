import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (values.name === "" || values.email === "" || values.password === "") {
      return;
    }
    setErrorMsg("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;
      await updateProfile(user, {
        displayName: values.name,
      });
      console.log("New user created with credentials : ", user);

      const studentData = {
        name: values.name,
        email: values.email,
        subjects: [],
      };

      // Use the user's UID as the document ID in Firestore
      const docRef = doc(db, "students", user.uid);

      await setDoc(docRef, studentData);
      console.log("Document written with ID: ", user.uid);

      navigate("/dashboard");
    } catch (e) {
      console.error("Error adding document: ", e);
      setErrorMsg("Error creating user");
    }
  };

  return (
    <div className="p-6 text-white flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="w-80 bg-custom-red p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white text-custom-black rounded px-3 py-2 focus:outline-0"
                value={values.name}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white text-custom-black rounded px-3 py-2 focus:outline-0"
                value={values.email}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-white text-custom-black rounded px-3 py-2 focus:outline-0"
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
              <span className="text-gray-800">Already have an account?</span>
              &nbsp;&nbsp;
              <span
                className="text-white font-bold cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </div>
            {errorMsg && <p className="text-red-500 mt-2 mb-2 text-sm flex justify-center">{errorMsg}</p>}
            <button
              type="submit"
              className="w-full bg-custom-black text-white rounded py-2 hover:text-custom-black hover:bg-white"
                onClick={() => navigate("/login")}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
