import { useState, useEffect } from "react";

import {
  Box,
  Image,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberDecrementStepper,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";

import { FruitsBox, FruitBox, FruitImg } from "./styles";

const FruitCard = (props) => {
  const [cart, setCart] = useState();
  const { name, price, unit, img, id, onClick } = props;
  const [amount, setAmount] = useState(0);
  const handleChange = (value) => setAmount(value);
  const FruitKart = { id, name, img, amount, total: amount * price };

  const handleClick = (event) =>
    localStorage.setItem(id, JSON.stringify(FruitKart));

  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <FruitImg>
          <Image src={img} alt={name} />
        </FruitImg>

        <Box p="6">
          <Box display="flex" alignItems="baseline"></Box>
          <Box
            mb="5px"
            ml="100px"
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>
          <Flex>
            <Box ml="35px">
              {Number(price.toFixed(2)).toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
                minimumFractionDigits: 2,
              })}
              <Box as="span" color="gray.600" fontSize="sm">
                / {unit}
              </Box>
            </Box>

            <NumberInput
              onChange={handleChange}
              value={amount}
              ml="45px"
              size="xs"
              maxW={16}
              defaultValue={0}
              min={0}
              step={unit === "KG" ? 0.1 : 1}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Text fontSize="md" ml="80px" mt="10px">
            Total:
            {Number((amount * price).toFixed(2)).toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
              minimumFractionDigits: 2,
            })}
          </Text>
          <Button
            onClick={handleClick}
            mt="5px"
            ml="30px"
            colorScheme="blue"
            isDisabled={amount > 0 ? false : true}
          >
            Adicionar no carrinho
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FruitCard;
