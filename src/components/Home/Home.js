import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS_GW_Hero/Feb_21/Auto_1500x600._CB658956070_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="CodeVision Dell"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61s0UA4pmVL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Apple iPhone 11 Pro Max (256GB) - Midnight Green"
            price={1334.36}
            image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Yogabar Veggie Masala Oats 400g | Masala Oats with 3X"
            price={2.34}
            image="https://images-eu.ssl-images-amazon.com/images/I/51U0PR-nUEL._AC_SX184_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Lipton Honey Lemon Green Tea Bags, 100 Pc"
            price={15.89}
            image="https://images-na.ssl-images-amazon.com/images/I/61ItXKIJWbL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="New Tree Gift Hamper, The Premium Flavored Dry Fruit"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81YlDNwNvGL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Vu 215cm (85 inches) The Masterpiece 4K Ultra HD Android QLED TV 85QPX (Armani Gold) (2020 Model)"
            price={1500.0}
            image="https://images-na.ssl-images-amazon.com/images/I/614rtkyy7tL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
