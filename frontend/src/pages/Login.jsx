import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="items-center flex justify-center h-screen mx-auto ">
        <div className=" w-[500px] bg-slate-200 rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center mb-2 text-blue-600">
            SignIn
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Enter Your Info details below:
          </p>
          <form onSubmit={handleForm}>
            <div className="mb-4">
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                placeholder="@username"
                className="rounded-md border border-gray-700 p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="*******"
                className="rounded-md border border-gray-700  p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="w-full px-4 py-3 bg-blue-700 text-white text-xl hover:bg-blue-900 cursor-pointer ">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
