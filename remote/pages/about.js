// DisplayPage.js
import React from "react";
import useStore from "@/stores/store";
import { Box, Heading } from "@chakra-ui/react";

const About = () => {
  const store = useStore();
  console.log(store);
  return (
    <Box p={5}>
      <Heading>Display Page</Heading>
      <p>Value from Input Page: {store.value}</p>
    </Box >
  );
};

export default About;
