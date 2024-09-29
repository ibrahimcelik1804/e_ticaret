import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const { basket } = useContext(BasketContext);
  const BasketAmount = basket.reduce((total, i) => total + i.amount, 0);
  return (
    <header className="flex sticky-top justify-around items-center bg-rose-800 h-[150px] text-3xl">
      <div>
        <Link to={"/"}>
          <h2
            className="border-8 rounded-full p-5 m-3 text-center text-white"
            style={{ borderRadius: "50%" }}
          >
            E-Ticaret
          </h2>
        </Link>
      </div>
      <div className="bg-white rounded-full p-3 flex relative  hover:bg-gray-500 ">
        <Link to={"/sepet"} className="flex justify-center items-center p-1">
          <BsCart style={{ width: "80px", height: "80px" }} />
          <span className="p-2 text-xl bg-rose-700 text-white border-4 border-rose-500 rounded-full w-6 h-6 flex justify-center items-center absolute right-[42px] top-[42px]">
            {BasketAmount}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
