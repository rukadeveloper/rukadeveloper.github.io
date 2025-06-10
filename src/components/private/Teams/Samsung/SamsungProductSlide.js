import React from "react";
import { Link } from "react-router-dom";

const SamsungProductSlide = ({ lions }) => {
  return (
    <div className="samsung-product-slide">
      <Link to="/">
        <div className="imgBox">
          <img src={lions.imageSrc} alt="lions_Products" />
        </div>
        <div className="plus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <div className="productName">{lions.name}</div>
        <div className="details">
          <p>
            {lions.details.split("|")[0]}
            <br />
            {lions.details.split("|")[1]}
          </p>
          <button>자세히 보기</button>
        </div>
      </Link>
    </div>
  );
};

export default SamsungProductSlide;
