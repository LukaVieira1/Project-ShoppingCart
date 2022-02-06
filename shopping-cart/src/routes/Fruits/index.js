import { useState, useEffect } from "react";
import fruitList from "../../services/fruitsList";
import FruitCard from "../../components/FruitCard/";
import { Flex, Button } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { getItem, setItem, sortByID } from "../../helpers/storageHelper.js";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    setFruits(fruitList);
  }, []);

  const handleClick = (fruit) => {
    const cart = getItem();
    const newCart = cart.filter((item) => item.id !== fruit.id);
    newCart.push(fruit);
    sortByID(newCart);
    setItem(newCart);
  };

  return (
    <>
      <Header>Fruteira PL, pagou levou</Header>
      <Flex justify={"space-evenly"} wrap={"wrap"} mt={100}>
        {fruits?.map((fruit) => (
          <FruitCard
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            price={fruit.price}
            unit={fruit.unit}
            img={fruit.img}
            handleClick={handleClick}
          />
        ))}
      </Flex>
      <Flex justify="center" mt="100px">
        <Link to="/cart">
          <Button mt="5px" ml="30px" size="lg" colorScheme="blue">
            Vizualizar carrinho
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default Fruits;
