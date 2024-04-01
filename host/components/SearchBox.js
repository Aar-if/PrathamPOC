import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionInputRightElement = motion(InputRightElement);
const MotionIconButton = motion(IconButton);

function SearchBox({ onSearch, onClear }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    onClear();
  };

  const fadeInAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <Box p={4} width="100vw">
      <InputGroup>
        <Input
          placeholder="SEARCH"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <MotionInputRightElement
          initial="hidden"
          animate="visible"
          // variants={fadeInAnimation}
        >
          {searchTerm ? (
            <MotionIconButton
              aria-label="Clear"
              variant="ghost"
              colorScheme="red"
              onClick={handleClear}
              // backgroundColor="#E2E8F0"
            />
          ) : (
            <MotionIconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="ghost"
              colorScheme="blue"
              onClick={handleSearch}
              // backgroundColor="#E2E8F0"
            />
          )}
        </MotionInputRightElement>
      </InputGroup>
    </Box>
  );
}

export default SearchBox;
