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
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FruitImg, Div } from "../CartContent/styles";

const Cart = (props) => {
  const {
    img,
    name,
    id,
    amount,
    total,
    unit,
    handleClick,
    handleRemoveClick,
    price,
  } = props;
  const [cartAmount, setCartAmount] = useState(amount);
  const handleChange = (value) => setCartAmount(value);
  const toast = useToast();

  return (
    <>
      <Div>
        <Box
          mt="2px"
          width="100%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Container maxW="container.xl">
            <Flex
              wrap="wrap"
              direction="row"
              justify="space-between"
              align="center"
            >
              <FruitImg>
                <img src={img} alt={name} />
              </FruitImg>
              <Text fontSize="md">{name}</Text>
              <Text fontSize="md">
                total:
                {Number((cartAmount * price).toFixed(2)).toLocaleString(
                  "pt-BR",
                  {
                    currency: "BRL",
                    style: "currency",
                    minimumFractionDigits: 2,
                  }
                )}
              </Text>

              <NumberInput
                onChange={handleChange}
                value={cartAmount}
                size="xs"
                maxW={16}
                min={0}
                step={unit === "KG" ? 0.1 : 1}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                onClick={() => {
                  handleClick({
                    id,
                    name,
                    img,
                    amount: cartAmount,
                    total: cartAmount * price,
                    unit,
                    price,
                  });
                  toast({
                    title: "Item atualizado",
                    description:
                      "O item foi atualizado com sucesso no carrinho",
                    status: "success",
                    duration: 1000,
                  });
                }}
                mt="5px"
                ml="30px"
                colorScheme="blue"
                isDisabled={cartAmount > 0 ? false : true}
              >
                Atualizar
              </Button>
              <Button
                onClick={() => {
                  handleRemoveClick({
                    id,
                  });
                  toast({
                    title: "Item removido",
                    description: "O item foi removido do carrinho",
                    status: "warning",
                    duration: 2000,
                  });
                }}
                colorScheme="red"
                size="xs"
              >
                Remover
              </Button>
            </Flex>
          </Container>
        </Box>
      </Div>
    </>
  );
};

export default Cart;
