import React from "react";
// import { GalleryList } from "../GalleryPics";
// import GalleryItem from "../GalleryItem";
import "../styles/Gallery.css";

const Gallery = () => {
  return (
    
    <div class="galleryPage">
      {/* <div className="gallery"> 
        {GalleryList.map((galleryItem, key) => {
          return (
            <GalleryItem 
              key={key}
              image={galleryItem.image}
            />
          )
        })}
      </div>
      */} 
      <div className="gallery">
      <iframe src="https://catwallinphotography.smugmug.com/frame/slideshow?key=zwTtPD&speed=3&transition=fade&autoStart=1&captions=0&navigation=1&playButton=1&randomize=1&transitionSpeed=2" frameborder="no" scrolling="no" title="slideshow"></iframe>      
      </div>
    </div>
  );
};
  
export default Gallery;