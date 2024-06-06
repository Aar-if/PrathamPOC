import React, { useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import CardDescription from "./CardDescription";
import RatingStars from "./RatingStars";
import Image from 'next/image'

function AnimatedCard({ cardData }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleCardClick = () => {
    setIsDescriptionOpen(true);
  };

  const handleCloseDescription = () => {
    setIsDescriptionOpen(false);
  };

  return (
    <>
      <Box
        borderRadius="md"
        backgroundColor="white"
        initial="hidden"
        animate="visible"
     
        borderWidth="1px"
        overflow="hidden"
        p={4}
        m={4}
        boxShadow="sm"
        borderColor="gray.300"
        onClick={handleCardClick}
        cursor="pointer"
      >
        <Card cardData={cardData} />
      </Box>
      <CardDescription
        cardData={cardData}
        isOpen={isDescriptionOpen}
        onClose={handleCloseDescription}
      />
    </>
  );
}

function Card({ cardData }) {
  return (
    <Box>
      <Image
        src={cardData.imageSrc}
        alt={cardData.title}
        width={500}
        height={500}
        maxheight="250px"
      />
      <Box p="6">
        <Heading as="h4" size="md" color="black">
          {cardData.title}
        </Heading>
        <Text mt={2} color="black">
          {cardData.description}
        </Text>
        {cardData.otherValues && (
          <VStack mt={2} alignItems="start">
            {cardData.otherValues.Rating && (
              <Box fontWeight="bold" color="black">
                Rating: <RatingStars rating={cardData.otherValues.Rating} />
              </Box>
            )}
            {cardData.otherValues.Category && (
              <Box fontWeight="bold" color="black">
                Category: {cardData.otherValues.Category}
              </Box>
            )}
            {cardData.otherValues.Price && (
              <Box fontWeight="bold" color="black">
                Price: {cardData.otherValues.Price}
              </Box>
            )}
          </VStack>
        )}
      </Box>
    </Box>
  );
}

export default AnimatedCard;
