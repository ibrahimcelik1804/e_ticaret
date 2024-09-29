import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Card from "../components/Card";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  // console.log(products);
  return (
    <div className="flex flex-wrap justify-center gap-5 px-5 mt-5">
      {!products ? (
        <Loading />
      ) : (
        [...products]
          .sort(() => Math.random() - 0.5)
          .map((item, index) => <Card item={item} key={index} />)
      )}
    </div>
  );
};

export default MainPage;
