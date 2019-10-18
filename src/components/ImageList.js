import React from "react";
import "../components/ImageList.css";
import ImageCard from "../components/ImageCard";

const ImageList = ({ images }) => {
  const imgs = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{imgs}</div>;
};

export default ImageList;
