import { useState, useEffect } from "react";
import fruitList from "../../services/fruitsList";
import FruitCard from "../../components/FruitCard/";
import { Flex, Button, filter } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);
  // use State do carrinho

  useEffect(() => {
    setFruits(fruitList);
  }, []);

  // useEffect(() => {
  //   const cart = localStorage.getItem("carrinho");
  //   console.log(cart);
  //   setCart(cart);
  // }, [cart]);

  // const addCarrihnho = (id) =>{
  //   altera cart
  //   setCart(prevState =>{
  //     {
  //       ...prevState,
  //       {
  //         x
  //       }
  //     }
  //   })

  // }

  return (
    <>
      <Flex justify={"space-evenly"} wrap={"wrap"}>
        {fruits?.map((fruit) => (
          <FruitCard
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            price={fruit.price}
            unit={fruit.unit}
            img={fruit.img}
            // onClick= {handleClick}
          />
        ))}
      </Flex>

      <Link to="/cart">
        <Button mt="5px" ml="30px" colorScheme="blue">
          Vizualizar carrinho
        </Button>
      </Link>
    </>
  );
};

export default Fruits;
