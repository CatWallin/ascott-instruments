import React from "react";
import { GalleryList } from "../GalleryPics";
import GalleryItem from "../GalleryItem";
import "../styles/Gallery.css";

const Gallery = () => {
  return (
    <div class="galleryPage">
      <h1>
        Gallery
      </h1>
      <div className="gallery"> 
        {GalleryList.map((galleryItem, key) => {
          return (
            <GalleryItem 
              key={key}
              image={galleryItem.image}
            />
          )
        })}
      </div>
    </div>
  );
};
  
export default Gallery;