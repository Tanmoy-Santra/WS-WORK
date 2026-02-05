import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();

  const registerUser = () =>{
    navigate("/login")
    alert("Register Sucessfully..")

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
          Register
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button onClick={registerUser}
            type="submit"
            className="w-full text-white py-3 rounded-lg bg-red-500 hover:bg-gray-500 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-black font-semibold cursor-pointer underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
