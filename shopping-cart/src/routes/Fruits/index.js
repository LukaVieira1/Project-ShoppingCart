import { useState, useEffect } from "react";
import fruitList from "../../services/fruitsList";
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
} from "@chakra-ui/react";

import { FruitsBox, FruitBox, FruitImg } from "./styles";

const Fruits = () => {
  const [amount, setAmount] = useState([]);
  const handleChange = (value) => {
    fruitList.map((fruit) => setAmount[fruit](value));
  };

  const [fruits, setFruits] = useState([]);
  console.log(amount);
  useEffect(() => {
    setFruits(fruitList);
  }, []);

  return (
    <>
      <FruitsBox>
        {fruits?.map((fruit) => (
          <FruitBox>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <FruitImg>
                <Image src={fruit.img} alt={fruit.name} />
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
                  {fruit.name}
                </Box>
                <Flex>
                  <Box ml="35px">
                    R${fruit.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                      / {fruit.unit}
                    </Box>
                  </Box>

                  <NumberInput
                    onChange={handleChange}
                    value={amount[fruit]}
                    ml="60px"
                    size="xs"
                    maxW={16}
                    defaultValue={0}
                    min={0}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
                <p>Total: R$ {(amount[fruit] * fruit.price).toFixed(2)}</p>
                <Button mt="5px" ml="30px" colorScheme="blue">
                  Adicionar no carrinho
                </Button>
              </Box>
            </Box>
          </FruitBox>
        ))}
      </FruitsBox>
    </>
  );
};

export default Fruits;
