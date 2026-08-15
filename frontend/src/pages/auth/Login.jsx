import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Login() {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email ) {
      setError("Please enter email ");
      return;
    }
    if (!password ) {
      setError("Please enter password ");
      return;
    }
  

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
  toast.success("Login successful!");

    setError("");

       navigate("/welcome");


   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">
            📚
          </div>
          <p className="text-gray-500 mt-2">
            Library Management System
          </p>

        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome Back
        </h2>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}


        <form onSubmit={handleSubmit}>

          
          <div className="mb-5">

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-blue-500"
            />

          </div>
          {/* <div className="mb-5">

            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>

            <input
              type="name"
              placeholder="Enter your name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-blue-500"
            />

          </div> */}


          <div className="mb-3">

            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-blue-500"
            />

          </div>
    
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;