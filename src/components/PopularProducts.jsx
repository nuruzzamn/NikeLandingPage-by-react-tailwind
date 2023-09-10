import React from "react";
import PopularProductsCard from "./PopularProductsCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div id="products" className="max-container max-sm:mt-0">
      <section className="flex flex-col justify-start gap-5 lg:mt-[-50px]">
        <h2 className="text-4xl font-semibold py-[-10px] ">
          Our <span className="font-palanquin text-coral-red"> Popular </span>{" "}
          Products
        </h2>
        <p className="font-montserrat text-gray-500 mt-2 lg:max-w-lg">
          Experience top-notch quality and style with our sought-after{" "}
          <br className="lg:max-w-lg hidden" />
          selections. Discover a world of comfort, design, and value.{" "}
        </p>
      </section>

      <section className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product, index) => (
          <PopularProductsCard key={index} {...product} />
        ))}
      </section>
    </div>
  );
};

export default PopularProducts;
