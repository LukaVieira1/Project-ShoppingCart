import CartContent from "../../components/CartContent";
import { useState, useEffect } from "react";
import { getItem, setItem, sortByID } from "../../helpers/storageHelper.js";
import Header from "../../components/Header";
import { Flex, Button, useToast, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const Cart = () => {
  const fruitList = getItem();
  const [fruits, setFruits] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const toast = useToast();
  useEffect(() => {
    setFruits(fruitList);
    const cart = getItem();
    let total = 0;
    cart.forEach((fruit) => {
      total = total + fruit.total;
    });
    setTotalCart(total);
  }, [cart]);

  const handleClick = (fruit) => {
    const cart = getItem();
    const newCart = cart.filter((item) => item.id !== fruit.id);
    newCart.push(fruit);
    sortByID(newCart);
    setCart(newCart);
    setItem(newCart);
  };

  const handleRemoveClick = (fruit) => {
    const cart = getItem();
    const newCart = cart.filter((item) => item.id !== fruit.id);
    sortByID(newCart);
    setCart(newCart);
    setItem(newCart);
  };

  return (
    <>
      <Header> Carrinho </Header>
      <Flex alignItems="center" direction="column" mt="150px">
        {fruits?.map((fruit) => (
          <CartContent
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            img={fruit.img}
            amount={fruit.amount}
            total={fruit.total}
            unit={fruit.unit}
            price={fruit.price}
            handleClick={handleClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
        <Text mt="25px">
          Total da compra:{" "}
          {Number(totalCart.toFixed(2)).toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
            minimumFractionDigits: 2,
          })}
        </Text>
        <Flex justify="center" mt="50px">
          <Link to="/">
            <Button
              mr="100px"
              w="150px"
              h="50px"
              mt="5px"
              ml="30px"
              size="lg"
              colorScheme="blue"
            >
              Comprar mais
            </Button>
          </Link>
          <Button
            w="150px"
            h="50px"
            mt="5px"
            ml="30px"
            size="lg"
            colorScheme="blue"
            onClick={() =>
              toast({
                title: "Compra finalizada!",
                description:
                  "Compra finalizada com sucesso, envie o pix para lukavieira14@gmail.com com o valor da compra",
                status: "success",
                duration: 15000,
                isClosable: true,
              })
            }
          >
            Finalizar compra
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Cart;
