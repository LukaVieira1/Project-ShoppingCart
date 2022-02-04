import {
  Box,
  Container,
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import { FruitImg } from "../CartContent/styles";

const Cart = (props) => {
  const { img, name, id, amount, total, unit } = props;
  const [cartAmount, setCartAmount] = useState(0);
  const handleChange = (value) => setCartAmount(value);

  return (
    <>
      <Box
        mt="2px"
        maxW="50%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <FruitImg>
              <img src={img} alt={name} />
            </FruitImg>
            <Text fontSize="md">{name}</Text>
            <Text fontSize="md">
              total:
              {Number(total.toFixed(2)).toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
                minimumFractionDigits: 2,
              })}
            </Text>

            <NumberInput
              onChange={handleChange}
              value={cartAmount}
              size="xs"
              maxW={16}
              defaultValue={amount}
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
        </Container>
      </Box>
    </>
  );
};

export default Cart;
