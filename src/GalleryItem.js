import React from 'react'

function GalleryItem({image}) {
    return (
        <div className="GalleryItem">
            <img src={image} />
        </div>
    )
}

export default GalleryItem