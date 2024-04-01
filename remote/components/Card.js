import React, { useState } from "react";
import { Box, Image, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CardDescription from "./CardDescription";
import RatingStars from "./RatingStars";

const MotionBox = motion(Box);

function AnimatedCard({ cardData }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const fadeInAnimation = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 5, y: 0, transition: { duration: 0.8 } },
  };

  const handleCardClick = () => {
    setIsDescriptionOpen(true);
  };

  const handleCloseDescription = () => {
    setIsDescriptionOpen(false);
  };

  return (
    <>
      <MotionBox
        borderRadius="md"
        backgroundColor="white"
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
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
      </MotionBox>
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
        w="100%"
        h="auto"
        maxHeight="250px"
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
