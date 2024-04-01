import React from "react";
import { Flex, Button } from "@chakra-ui/react";

const iconStyle = {
  fontSize: "1.2rem",
  color: "#6B6B6B",
  backgroundColor: "white",
  border: "1px solid #6B6B6B",
};
const activeColor = "#3E6139";
const hoverColor = "#3E6139";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const generatePaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Button
          ml={1}
          mr={1}
          key={i}
          onClick={() => handlePageChange(i)}
          variant={currentPage === i ? "solid" : "outline"}
          colorScheme="customInactive"
          _hover={{ color: "white", bg: hoverColor }}
          style={currentPage === i ? { backgroundColor: activeColor } : {}}
        >
          {i}
        </Button>
      );
    }
    return items;
  };

  return (
    <Flex justify="center" mt={4} mb={99}>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        isDisabled={currentPage <= 1}
        mr={2}
        colorScheme="teal"
        _hover={{ color: "white", bg: "teal.500" }}
        style={iconStyle}
        p={0}
      >
        P
      </Button>
      {generatePaginationItems()}
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
        ml={2}
        colorScheme="teal"
        _hover={{ color: "white", bg: "teal.500" }}
        style={iconStyle}
        p={0}
      >
        N
      </Button>
    </Flex>
  );
};

export default Pagination;
