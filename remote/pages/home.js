// home.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "@/stores/store";
import {
  Button,
  Input,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const setValue = useStore((state) => state.setValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(inputValue);
    router.push("/about");
  };


  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Input Page
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="value" isRequired>
          <FormLabel>Enter a value</FormLabel>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a value"
          />
          {/* Add any validation messages if needed */}
          {/* <FormErrorMessage>Error message here</FormErrorMessage> */}
        </FormControl>
        <Button type="submit" mt={4} colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Home;
