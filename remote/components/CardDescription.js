import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import RatingStars from "./RatingStars";

function CardDescription({ cardData, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      {" "}
      {/* Adjust the size of the modal */}
      <ModalOverlay backdropFilter="auto" backdropBlur="3px" />
      <ModalContent zIndex="3">
        <ModalHeader>{cardData.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={cardData.imageSrc}
            alt={cardData.title}
            w="100%"
            h="auto"
          />
          <Box p="3">
            {" "}
            {/* Adjust the padding to make the content area smaller */}
            <Heading as="h4" size="md">
              {cardData.title}
            </Heading>
            <Text mt={2} color="gray.600">
              {cardData.description}
            </Text>
            {cardData.otherValues && (
              <VStack mt={2} alignItems="start">
                {cardData.otherValues.Rating && (
                  <Box fontWeight="bold">
                    Rating: <RatingStars rating={cardData.otherValues.Rating} />
                  </Box>
                )}
                {cardData.otherValues.Category && (
                  <Box fontWeight="bold">
                    Category: {cardData.otherValues.Category}
                  </Box>
                )}
                {cardData.otherValues.Price && (
                  <Box fontWeight="bold">
                    Price: {cardData.otherValues.Price}
                  </Box>
                )}
              </VStack>
            )}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue">Actions</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CardDescription;
