import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAnimation from "../../json/Login.json";

export default function Login() {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Email + Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Google sign-in failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto lg:w-8/12 my-10 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-[#ebeffa] rounded-lg overflow-hidden">

        {/* Left Form Section */}
        <div className="w-full lg:w-1/2 p-8 bg-slate-200 flex flex-col justify-center">
          <h1 className="text-2xl text-[#db2525] font-bold text-center mb-3">
            WELCOME BACK TO FRESHEAT
          </h1>
          <h3 className="text-3xl font-bold text-center mb-6">LOGIN NOW!</h3>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-center mb-3 font-medium">{error}</p>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium mb-1">Email: </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="input input-bordered w-full lg:w-9/12 bg-white border-gray-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium mb-1">Password: </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                className="input input-bordered w-full lg:w-9/12 bg-white border-gray-300"
              />

              <label className="label mt-1">
                <a href="/forgetpassword" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full mt-2"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Register Link */}
            <p className="mt-3 text-sm">
              Don't have an account?{" "}
              <a href="/register" className="text-red-500 border-b-2">
                Register
              </a>
            </p>
          </form>

          {/* Google Login */}
          <div className="mt-6 w-full flex">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="btn btn-outline btn-secondary flex items-center justify-center gap-2 w-full"
            >
              <FcGoogle size={20} />
              <span>Login with Google</span>
            </button>
          </div>
        </div>

        {/* Right Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            style={{ width: 500, height: 400 }}
          />
        </div>

      </div>
    </div>
  );
}
