import React from "react";
import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function RatingStars({ rating }) {
  return (
    <Box mt={2}>
      {Array.from({ length: Math.floor(rating) }, (_, i) => (
        <StarIcon key={i} color="#FFD600" boxSize={5} />
      ))}
      {rating % 1 !== 0 && <StarIcon key="half" color="#D9D9D9" boxSize={5} />}
      {Array.from({ length: 5 - Math.ceil(rating) }, (_, i) => (
        <StarIcon key={`empty-${i}`} color="#D9D9D9" boxSize={5} />
      ))}
    </Box>
  );
}

export default RatingStars;
