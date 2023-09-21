import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { auth, provider } from "../Auth/config";
import { signInWithPopup } from "firebase/auth";
import ImageGalleryPage from "../../Pages/ImageGalleryPage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // Your email and password login logic here
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setEmail(user.email);
        localStorage.setItem("email", user.email);
        navigateTo("/image-gallery");
      })
      .catch((error) => {
        console.error("Google login error:", error);
      });
  };

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);
  const divStyle = {
    backgroundImage: `url(https://pixabay.com/get/g30a70bfbb81ea858faf3191176c9c2225f3b2d17dca9efab4f27b56c8cf62701d7d47799a83eff005b9addeec33140afc0070d80cecf8939fcfbd274969036b7_1280.jpg)`,
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle}>
      <div className="flex flex-col pt-12 p-3 items-center h-screen w-full bg-[#f2f2f2] bg-opacity-0">

        <form
          onSubmit={handleLogin}
          className="w-full max-w-md px-6 py-2 bg-[#e8e6e6] shadow-lg rounded-lg"
        >
        <h1 className="text-[25px] font-bold text-center mb-4 text-slate-800">Welcome To iGallery</h1>
          <div className="mb-4">
            <label className="block text-lg font-bold" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <Link to="/image-gallery">
            <button
              type="submit"
              className="w-full py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
            >
              Login
            </button>
          </Link>
         
          <div className="flex flex-col items-center gap-2 py-1 mt-4 space-y-2">
            {/* "Sign in with Google" button */}
            <button
              className="w-full py-2 flex items-center justify-center gap-2 bg-blue-500 text-gray-800 rounded-lg hover:bg-blue-400"
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={20} />
              Login with Google
            </button>

            {/* "Sign in with Email and Password" button */}
            <button
              className="w-full py-2 flex items-center justify-center gap-2 bg-red-500 text-gray-800 rounded-lg hover:bg-red-300"
              onClick={() => {
                // Handle email and password sign-in logic here
              }}
            >
              <AiOutlineMail size={18} /> Login with Email & Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
