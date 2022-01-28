import "./styles.css";
import { useState, useEffect } from "react";
import fruitList from "../../services/fruitsList";
import { Box, Image, Badge, StarIcon } from "@chakra-ui/react";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    setFruits(fruitList);
  }, []);
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <>
      <div>
        {fruits?.map((fruit) => (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={fruit.img} alt={fruit.name} />

            <Box p="6">
              <Box display="flex" alignItems="baseline"></Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {fruit.name}
              </Box>

              <Box>
                R${fruit.price}
                <Box as="span" color="gray.600" fontSize="sm">
                  / {fruit.unit}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </div>
    </>
  );
};

export default Fruits;
