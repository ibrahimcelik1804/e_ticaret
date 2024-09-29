import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const addToBasket = (product) => {
    // sepette bu elemandan daha önce var mı
    const found = basket.find((i) => i.id === product.id);
    if (!found) {
      //sepette tıkladığımız ürün yoksa sepete tıkladığımız ürün ve ürüne amount:1 olarak ekliyoruz
      setBasket([...basket, { ...product, amount: 1 }]);
    } else {
      // varsa yine amount degeri ekleyip degerini 1 artırıyoruz.
      const updated = { ...found, amount: found.amount + 1 };
      //yine basket dizisini dönüyoruz eger güncellenen ürün ise güncelleneni degilse itemi alıp yeni dizi oluşturuyoruz.
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      //sepeti güncelliyoruz.
      setBasket(newBasket);
    }
  };
  const removeFromBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);
    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
    } else {
      const filtered = basket.filter((i) => i.id !== found.id);
      setBasket(filtered);
    }
  };
  return (
    <BasketContext.Provider value={{ addToBasket, basket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
