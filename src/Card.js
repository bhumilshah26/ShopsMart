import React from "react";
import Slider from "react-slick";
import "./Card.css";
// import shoe from "./assets/shoe.png";
import hairp from "./assets/hairproducts.jpg";
import bottle from "./assets/bottle.jpg";
import clothes from "./assets/clothes.jpg";
import food from "./assets/food.jpg";

const Card = ({ title, image, buttons }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-container">
        <div className="card-title">
          <h2>{title}</h2>
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
      image: food,
      buttons: [
        {  text: "blah blah blah " }
      ],
    },
    // Add more card data here, ensuring each object has a valid `key` property and button data within the `buttons` array
    {
      key: "1",
      title: "hair products",
      image: hairp,
      buttons: [
        {  text: " blah blah blah " }
      ],
    },
    // ... (add more cards)
    {
      key: "1",
      title: "clothes",
      image: clothes,
      buttons: [
        {  text: "blah blah blah  " }
      ],
    },
    {
      key: "1",
      title: "bottle",
      image: bottle,
      buttons: [
        {  text: " blah blah blah " }
      ],
    },
    {
      key: "1",
      title: "food",
      image: food,
      buttons: [
        {  text: "blah blah blah  " }
      ],
    }
    
  ];

  return (
    <div className="commontitle">Recommendations
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
