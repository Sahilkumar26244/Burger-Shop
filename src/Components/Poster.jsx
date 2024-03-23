import React from 'react';
import poster from "../assets/poster.jpg"
import { Box, Text } from '@chakra-ui/react';

function Poster() {
  return (
    <Box position="relative" h={{ base: "80vh", lg: "110vh" }}>
      <Box
        backgroundImage={`url(${poster})`}
        backgroundSize="cover"
        
        h="100%"
      >
        {/* Red overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgb(246,75,60)" 
          opacity={"0.8"}
        ></Box>

        {/* Centered text */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
          zIndex="1"
          w={{base:"100%",lg:"30%"}}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
        <Text fontSize={"20px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
          <Text fontSize={{ base: "24px", lg: "38px" }} fontWeight={600}>
            Barry Henderson
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Poster;
