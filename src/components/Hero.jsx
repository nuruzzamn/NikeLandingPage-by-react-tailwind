import React, { useState } from "react";
import arrowRight from "../assets/icons/arrow-right.svg";
import Button from "./Button/Button";
import { statistics } from "../constants";
// import { bigShoe1 } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoesCard from "./ShoesCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 
    max-container lg:-mb-[50px]">
      <div className="relative w-full max-xl:padding-x pt-28 xl:w-2/5 flex flex-col justify-center items-start">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop Now" imgSrc={arrowRight} hover={`hover:bg-black`}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics &&
            statistics.map((data) => {
              const { label, value } = data;
              return (
                <article key={label}>
                  <h1 className="text-4xl font-palanquin font-bold">{value}</h1>
                  <p className="text-center font-montserrat text-slate-gray text-lg leading-8">
                    {label}
                  </p>
                </article>
              );
            })}
        </div>
      </div>

      <div className=" bg-primary bg-hero bg-cover bg-center relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40">
        <img
          src={bigShoeImg}
          alt="cover shoes"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[3%] sm:left-[10%] max-sm:px-6">
          {shoes &&
            shoes.map((shoe, index) => {
              return (
                <div key={index}>
                  {/* <ShoesCard thumbnail={thumbnail} bigShoe={bigShoe}/> */}
                  <ShoesCard
                    imgUrl={shoe}
                    changeBigShoe={(shoe) => {
                      setBigShoeImg(shoe);
                    }}
                    bigShoeImg={bigShoeImg}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
