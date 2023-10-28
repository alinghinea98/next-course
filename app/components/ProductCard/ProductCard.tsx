import React from "react";
import AddToCart from "../AddToCart";
import styles from "./ProductCard.module.css";
// module css is a css file scoped, in order to not overwritte anything else in other components

/**
    By using use client we are telling to compiler to include this component in JS bundle
    That means if this component is dependent on other components, those components will automatically become client components
    Therefore will be added in JS bundle.

    So we have a better option. To make our app faster and more SE friendly
    we want to render our components on the server as mush as possible
    Use client components only when absolutely necessary
    So here we will move only the button to the client.
*/

function ProductCard() {
  return (
    <div className="p-5 my-5 text-white text-xl">
      <AddToCart />
    </div>
  );
}

export default ProductCard;
