import CartContent from "../../components/CartContent";
import { useState, useEffect } from "react";
import { getItem, setItem } from "../../helpers/storageHelper.js";
import Header from "../../components/Header";
import { Div } from "./styles";

const Cart = () => {
  const fruitList = getItem();
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    setFruits(fruitList);
  }, []);

  return (
    <>
      <Header> Carrinho </Header>
      <Div>
        {fruits?.map((fruit) => (
          <CartContent
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            img={fruit.img}
            amount={fruit.amout}
            total={fruit.total}
            unit={fruit.unit}
          />
        ))}
      </Div>
    </>
  );
};

export default Cart;
