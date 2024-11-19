import React, { useState, useEffect } from "react";

const ImageSlider = () => {
    const images = [
        "/images/image1.png",
        "/images/image2.png",
        "/images/image3.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change the image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="object-contain w-full h-[450px] rounded-md"
            />
        </div>
    );
};

export default ImageSlider;
