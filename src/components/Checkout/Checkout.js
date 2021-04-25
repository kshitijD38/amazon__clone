import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          // src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Javed/hero/1500x600_Herotator_CBCC_3._CB660230873_.jpg"
          alt="yeeeellllooooo"
        />
        <div>
          <h>Hello, {user?.email}</h>
          <h2 className="checkout__title">Your Amazon Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <h2>
          <Subtotal />
        </h2>
      </div>
    </div>
  );
};

export default Checkout;
