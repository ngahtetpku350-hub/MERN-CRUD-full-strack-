import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../api/services/user";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  
  useEffect(() => {
    if(localStorage.getItem("user")){
      localStorage.removeItem("user")
      toast.success("Logout successfully")
      navigate("/login")
    }
    if (localStorage.getItem("token")) {
      toast.warn("your already login")
      navigate('/'); 
    }
    
  });
  
  // const userLogin = {
  //   email,
  //   password
  // }
  const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!password || !email) {
        toast.warning("All fields are required!");
        return;
      }

      try {
        const response = await login({
          email,password
        });
         localStorage.setItem("token",response.token)
        //  store user data in cookie 
         localStorage.setItem("user",response.data.id)
         // store user name
         localStorage.setItem("username", response.data.name)
         toast.success(response.message);
         navigate('/posts')
      } catch (error) {
          toast.error(error.response.data.message)
      }

      // await login(userLogin);
      // toast.success("Login successfully!");

      // if (userLogin){
        
      // }
    };
      
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-950">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Sign in to your account to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
          />
        </div>

        <button
          // type="submit"
          className="mt-6 w-full rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-black hover:underline"
        >
          Create one
        </Link>
      </p>
    </div>
  );
};

export default Login;
