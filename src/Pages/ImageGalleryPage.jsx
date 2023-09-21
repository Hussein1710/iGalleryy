import React from "react";
import ImageGallery from "../Components/ImageGallery";
import { useNavigate } from "react-router-dom";

const ImageGalleryPage = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigateTo("/");
  };
  return (
    <div className="bg-gray-200 ">
      <button onClick={logout} className=" bg-red-500 hover:bg-red-600 text-white font-bold ml-3 mt-2 py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-red-300">Logout</button>
      <ImageGallery />
    </div>
  );
};

export default ImageGalleryPage;
