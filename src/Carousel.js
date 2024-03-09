// // src/App.js
// import React, { useState } from 'react';
// import './App.css';

// const images = [
//   'https://placekitten.com/800/400',
//   'https://placekitten.com/801/400',
//   'https://placekitten.com/802/400',
//   // Add more image URLs as needed
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative overflow-hidden">
//       <div
//         className="flex transition-transform duration-300 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
//           </div>
//         ))}
//       </div>

//       <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2">
//         Previous
//       </button>
//       <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2">
//         Next
//       </button>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-3xl font-bold my-4">Infinite Carousel Slider</h1>
//       <Carousel />
//     </div>
//   );
// }

// export default App;

// Carousel.js
// import React, { useRef, useEffect } from 'react';
// import './Carousel.css';
// import hairp from "./assets/hairproducts.jpg";
// import bottle from "./assets/bottle.jpg";
// import clothes from "./assets/clothes.jpg";
// import food from "./assets/food.jpg";

// const images = [
//   hairp, bottle, clothes, food
// ];

// const Carousel = () => {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const ul = carouselRef.current;
//     ul.insertAdjacentHTML('afterend', ul.outerHTML);
//     ul.nextSibling.setAttribute('aria-hidden', 'true');
//   }, []);

//   return (
//     <div className="commontitle">Best Sellers
//     <div className="w-full inline-flex flex-nowrap overflow-hidden mask-image-linear-gradient">
//       <ul ref={carouselRef} className="flex items-center justify-center md:justify-start logo-list">
//         {images.map((image, index) => (
//           <li key={index}>
//             <img src={image} alt={`Logo ${index + 1}`} />
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// };

// export default Carousel;

// Carousel.js
// import React, { useRef, useEffect } from 'react';
// import './Carousel.css';
// import hairp from "./assets/hairproducts.jpg";
// import bottle from "./assets/bottle.jpg";
// import clothes from "./assets/clothes.jpg";
// import food from "./assets/food.jpg";

// const images = [hairp, bottle, clothes, food];

// const Carousel = () => {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const ul = carouselRef.current;
//     ul.insertAdjacentHTML('afterend', ul.outerHTML);
//     ul.nextSibling.setAttribute('aria-hidden', 'true');
//   }, []);

//   return (
//     <div className="carousel-container">
//       <div className="commontitle">Best Sellers</div>
//       <div className="carousel-wrapper">
//         <ul ref={carouselRef} className="flex items-center logo-list">
//           {images.map((image, index) => (
//             <li key={index}>
//               <img src={image} alt={`Logo ${index + 1}`} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import React, { useRef, useEffect } from 'react';
import './Carousel.css';
import hairp from "./assets/hairproducts.jpg";
import bottle from "./assets/bottle.jpg";
import clothes from "./assets/clothes.jpg";
import food from "./assets/food.jpg";

const images = [hairp, bottle, clothes, food];

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ul = carouselRef.current;
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
  }, []);

  return (
    <div className="carousel-container">
      <div className="commontitle">Best Sellers</div>
      <div className="carousel-wrapper">
        <ul ref={carouselRef} className="flex items-center logo-list">
          {images.map((image, index) => (
            <li key={index}>
              <div className="card">
                <img src={image} alt={`Logo ${index + 1}`} />
                {/* You can add additional content or styling for the card here */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
