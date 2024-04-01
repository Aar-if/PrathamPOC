import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  Select,
  Box,
} from "@chakra-ui/react";

function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const filterOptions = ["Filter 1", "Filter 2", "Filter 3"];

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleApplyFilters = () => {
    // Perform actions with the selected filter
    console.log("Selected Filter:", selectedFilter);
    handleClose();
  };

  return (
    <Box>
      <Button onClick={handleOpen} colorScheme="teal">
        FILTER
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <ModalOverlay backdropFilter="auto" backdropBlur="3px" />
        <ModalContent mt="20vh" ml={5} mr={5}>
          <ModalHeader>Filter Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Select
                placeholder="Select Filter"
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                {filterOptions.map((filter, index) => (
                  <option key={index} value={filter}>
                    {filter}
                  </option>
                ))}
              </Select>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleApplyFilters} colorScheme="teal">
              Apply Filter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default FilterButton;
