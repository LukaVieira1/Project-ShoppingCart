import { Heading, Flex } from "@chakra-ui/react";

const Header = (props) => {
  const { children } = props;
  return (
    <>
      <Heading
        maxW="100%"
        padding="20px"
        textAlign="center"
        backgroundColor="blue.300"
        textColor="white"
      >
        {children}
      </Heading>
    </>
  );
};

export default Header;
