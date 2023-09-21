import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import Loader from "./Loader";
import ImageSearch from "./ImageSearch";
import Footer from "./Footer";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const pixabayApiKey = "39539339-f063004a5d6c9a9c33a1a9947";
        const response = await axios.get(
          `https://pixabay.com/api/?key=${pixabayApiKey}&q=${term}&image_type=photo&pretty=true`
        );

        setImages(response.data.hits);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching images.");
      }
    };

    fetchImages();
  }, [term]);

  const handleDrop = (draggedImage, droppedImage) => {
    // Clone the images array to avoid mutating the state directly
    const updatedImages = [...images];

    // Find the indices of the dragged and dropped images
    const draggedIndex = updatedImages.findIndex(
      (image) => image.id === draggedImage.id
    );
    const droppedIndex = updatedImages.findIndex(
      (image) => image.id === droppedImage.id
    );

    // Swap the positions of the dragged and dropped images in the array
    [updatedImages[draggedIndex], updatedImages[droppedIndex]] = [
      updatedImages[droppedIndex],
      updatedImages[draggedIndex],
    ];

    // Update the state with the new image order
    setImages(updatedImages);
  };

  return (
    <div className="container mx-auto p-6">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-3">No Images Found</h1>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onDrop={(newImage) => handleDrop(newImage, image)}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ImageGallery;
