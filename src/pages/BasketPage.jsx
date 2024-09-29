import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { IoTrashSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const BasketPage = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);
  const total = basket.reduce((total, i) => total + i.price * i.amount, 0);
  return (
    <div>
      {basket.length === 0 ? (
        <h4 className="mt-8  text-2xl font-bold text-center">
          Sepetinizde Ürün Yoktur.
        </h4>
      ) : (
        basket.map((i) => (
          <div className="mt-5 flex gap-3  bg-slate-100 m-4 p-3 rounded-xl text-black ">
            <div className="flex items-center">
              <img
                src={i.image}
                className="w-[100px] border-[3px] border-rose-700 rounded-xl "
              />
            </div>
            <div className=" flex flex-col gap-2 w-full">
              <h6 className="font-semibold text-2xl">{i.title}</h6>
              <h2 className="text-green-600 font-bold">$ {i.price}</h2>
              <div className="flex  justify-between items-center">
                <div className="flex gap-1 border-4 border-black rounded-3xl h-9  items-center ">
                  <IoTrashSharp
                    onClick={() => removeFromBasket(i)}
                    className="hover:bg-rose-700 rounded-full p-1  "
                    style={{ width: "35px", height: "35px" }}
                  />
                  <span className="text-2xl font-bold ">{i.amount}</span>
                  <FaPlus
                    onClick={() => addToBasket(i)}
                    className="hover:bg-green-700 rounded-full p-1   "
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold ">
                    Ürün Toplamı :
                    <span className="text-green-600 font-bold">
                      ${(i.price * i.amount).toFixed(2)}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div>
        {basket.length !== 0 && (
          <div>
            <h2 className="text-2xl font-bold flex justify-end m-4 capitalize">
              total price amount :
              <span className="text-green-600 font-bold">
                {" "}
                $ {total.toFixed(2)}
              </span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketPage;
