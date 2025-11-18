import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import Lottie from 'lottie-react';
import registerAnimation from '../../json/Register.json';

export default function Register() {
  const { createUser, SetUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    // Password Validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 6+ chars, include 1 uppercase, 1 number & 1 special character."
      );
      return;
    }

    setError("");

    try {
      // 1. Create User
      const result = await createUser(email, password);

      // 2. Upload image to imgbb
      const formData = new FormData();
      formData.append("image", image);

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=8be0cdd4b85b2bb02d8b738407647b48`,
        formData
      );

      const imageUrl = imgRes.data.data.url;

      // 3. Update Firebase Profile
      await updateProfile(result.user, {
        displayName: name,
        photoURL: imageUrl
      });

      // 4. Save to database
      await axios.post(
        `${import.meta.env.VITE_API_URL}/users`,
        {
          name,
          email,
          image: imageUrl,
          role: "user"
        }
      );

      // 5. Set User Context
      SetUser({
        email,
        displayName: name,
        photoURL: imageUrl
      });

      toast.success("Registration Successful!");
      form.reset();
      setPreview(null);
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error(err);
      toast.error("Registration failed. Try again!");
    }
  };

  // Preview Image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="container mx-auto lg:w-8/12 my-10 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row xl:flex-row items-center gap-6 bg-[#ebeffa] rounded-lg overflow-hidden">
        
        {/* Left Side Animation */}
        <div className="w-full lg:w-1/2 xl:w-1/2 flex justify-center items-center p-4">
          <Lottie animationData={registerAnimation} loop={true} style={{ width: 500, height: 400 }} />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6 md:p-10 bg-white flex flex-col justify-center">
          <h1 className="text-2xl text-[#db2525] font-bold text-center mb-3">CREATE AN ACCOUNT</h1>
          <h3 className="text-3xl font-bold text-center mb-6">REGISTER NOW!</h3>

          <form onSubmit={handleRegister} className="flex flex-col gap-4">

            {/* Name */}
            <div>
              <label className="label-text font-medium mb-1">Full Name</label>
              <input type="text" name="name" required className="input input-bordered w-full bg-gray-100" />
            </div>

            {/* Email */}
            <div>
              <label className="label-text font-medium mb-1">Email</label>
              <input type="email" name="email" required className="input input-bordered w-full bg-gray-100" />
            </div>

            {/* Image Upload */}
            <div>
              <label className="label-text font-medium mb-1">Profile Image</label>
              <input type="file" name="image" accept="image/*" required className="w-full" onChange={handleImageChange} />

              {preview && (
                <img src={preview} className="mt-3 w-20 h-20 rounded-full border object-cover" alt="Preview" />
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label-text font-medium mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="input input-bordered w-full bg-gray-100 pr-10"
              />
              <span
                className="absolute top-10 right-3 text-gray-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error && <p className="text-red-600 text-sm -mt-2">{error}</p>}

            {/* Register Button */}
            <button className="btn btn-primary w-full mt-3">Register</button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-red-500 border-b-2">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
