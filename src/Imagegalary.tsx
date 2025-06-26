import React from "react";

export default function ImageGallery() {
  const images = [
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/id/237/200/300",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Image Gallery</h1>
        <img 
          src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg" 
          alt="Random cute and funny pictures" 
        />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
      
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Sample ${i + 1}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
