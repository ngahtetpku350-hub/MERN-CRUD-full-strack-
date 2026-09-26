import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { register } from "../../api/services/user";
import { toast } from "react-toastify";
const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const newUser = {
    name,
    email,
    password
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      toast.warn("your already login")
      navigate("/"); 
    }
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast.warning("All fields are required!");
      return;
    }
    if ( password != confirmPassword){
      toast.warning("passwrod does't match");
      return;
    }

    try {
      const response = await register({
        name,email,password
      });
      toast.success(response.message);
      navigate("/login")
    } catch (error) {
      
    }

    // await register(newUser);
    // toast.success("Register successfully!");
    // if(newUser){
    //     navigate("/login")
    // }
    
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-950">
          Create an account
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Sign up to start creating and managing posts.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-800"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
          />
        </div>

        {/* Email */}
        <div className="mt-5">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
          />
        </div>

        {/* Password */}
        <div className="mt-5">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-5">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-semibold text-gray-800"
          >
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
          />
        </div>

        <button
          // type="submit"
          className="mt-6 w-full rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-black hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
