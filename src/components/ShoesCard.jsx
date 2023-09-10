import React from "react";

const ShoesCard = ({ imgUrl, changeBigShoe, bigShoeImg }) => {
  const { thumbnail, bigShoe } = imgUrl;

  const handleClick = () => {
    if (bigShoeImg !== bigShoe) {
      changeBigShoe(bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl 
    ${
      bigShoeImg === bigShoe ? "border-coral-red" : "border-transparent"
    } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={thumbnail}
          alt="shoe card img"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoesCard;
