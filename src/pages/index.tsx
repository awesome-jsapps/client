import { Box, Heading } from "@chakra-ui/react";
import { AddressForm } from "components/AddressForm";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box backgroundColor="black" height="100vh">
      <Heading>Espetinho Delivery</Heading>
      <AddressForm />
    </Box>
  );
};

export default Home;
