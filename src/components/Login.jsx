import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
    const loginUser =()=>{
        navigate('/')
        alert("Login Sucessfully..")
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBF7E6] px-4">
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold text-center mb-6">
          Login
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button onClick={loginUser}
            type="submit"
            className="w-full text-white py-3 rounded-lg  bg-red-500 hover:bg-gray-500 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-black font-semibold cursor-pointer underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
