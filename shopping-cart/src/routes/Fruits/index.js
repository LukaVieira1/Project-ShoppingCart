import { useState, useEffect } from "react";
import fruitList from "../../services/fruitsList";
import FruitCard from "../../components/FruitCard/";
import { Flex, Button } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    setFruits(fruitList);
  }, []);

  return (
    <>
      <Flex justify={"space-evenly"} wrap={"wrap"}>
        {fruits.map((fruit) => (
          <FruitCard
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            price={fruit.price}
            unit={fruit.unit}
            img={fruit.img}
          />
        ))}
      </Flex>
      <Link to="/cart">
        <Button
          // onClick={handleClick}
          mt="5px"
          ml="30px"
          colorScheme="blue"
        >
          Vizualizar carrinho
        </Button>
      </Link>
    </>
  );
};

export default Fruits;
