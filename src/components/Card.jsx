import React, { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Card = ({ item }) => {
  //console.log(item);
  const context = useContext(BasketContext);
  return (
    <div
      style={{ width: "320px" }}
      className="bg-slate-100 flex flex-col rounded-xl justify-between p-4 text-black "
    >
      {/*resim*/}
      <div className="flex justify-center mb-2">
        <img src={item.image} style={{ height: "120px" }} alt="" />
      </div>
      {/*veriler*/}
      <div>
        <h4 className="text-xl text-rose-800 font-semibold">{item.title}</h4>
        <p className="text-xl text-green-600 font-bold ">$ {item.price}</p>
        <p className="text-xl text-red-600 font-bold">
          {item.rating.rate} / {item.rating.count}
        </p>
        <p>{item.category}</p>
      </div>
      {/*button*/}
      <button
        onClick={() => context.addToBasket(item)}
        className="capitalize bg-rose-500 w-full text-white font-bold text-xl "
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default Card;
