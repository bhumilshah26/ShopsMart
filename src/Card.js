import React from "react";
import Slider from "react-slick";
import "./Card.css";
// import shoe from "./assets/shoe.png";
// import hairp from "./assets/hairproducts.jpg";
// import bottle from "./assets/bottle.jpg";
// import clothes from "./assets/clothes.jpg";
// import food from "./assets/food.jpg";

import image1 from './assets/jewellery.jpg';
import image2 from './assets/figurines.jpg';
import image3 from './assets/shoes.jpg';


const Card = ({ title, image, buttons }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-container">
        <div className="card-title">
          {/* <h2>{title}</h2> */}
        </div>
        <div className="card-content">
          <div className="buttons">
            {buttons.map((button) => (
              <a key={button.href} href={button.href} className="button">
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardsContainer = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Change this based on your design
//     slidesToScroll: 1,
//   };

  const cards = [
    {
      key: "1",
      title: "food",
      image: image1,
      buttons: [
        {  text: "write about price, discount " }
      ],
    },
    // Add more card data here, ensuring each object has a valid `key` property and button data within the `buttons` array
    {
      key: "1",
      title: "hair products",
      image: image2,
      buttons: [
        {  text: " write about price, discount " }
      ],
    },
    // ... (add more cards)
    {
      key: "1",
      title: "clothes",
      image: image3,
      buttons: [
        {  text: "write about price, discount  " }
      ],
    },
    {
      key: "1",
      title: "bottle",
      image: image2,
      buttons: [
        {  text: " write about price, discount " }
      ],
    },
    {
      key: "1",
      title: "food",
      image: image1,
      buttons: [
        {  text: "write about price, discount  " }
      ],
    }
    
  ];

  return (
    <div className="text-xl p-4 transition mx-auto bg-transparent">Recommendations (based on your previous views)
    <div className="cards-container">
      {/* <Slider {...settings}> */}
        {cards.map((card) => (
          <Card key={card.key} {...card} />
        ))}
      {/* </Slider> */}
      </div>
    </div>
  );
};

export default CardsContainer;
