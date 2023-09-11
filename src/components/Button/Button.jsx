const Button = ({ label, imgSrc, hover, background, textColor, border }) => {
  return (
    <div>
      <button
        className={` ${hover} 
        ${background ? `${background} ${textColor} ${border}` : "bg-coral-red text-white border-coral-red"}
        flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full `}
      >
        {" "}
        {label} <img src={imgSrc} alt="" />
      </button>
    </div>
  );
};

export default Button;
