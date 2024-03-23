import React from 'react';
import banner from "../assets/banner.png"
import { Box, Image, Text } from '@chakra-ui/react';
import Buttons from '../Common/Buttons';

function HeroSection() {
  return (
    <div>
        <Box position={"relative"} >
          <Box w={"100%"} h={"100vh"} bg={"black"} >
            <Image display={{base:"none",lg:"flex"}} w={"100%"} h={"100%"} objectFit={"cover"} src={banner} />
          </Box>
          <Box position={"absolute"} top={{base:"25%",lg:"35%"}} left={"6%"} color={"white"} w={{base:"90%",lg:"40%"}} display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Box>
              <Text fontSize={"60px"} fontWeight={700} lineHeight={"60px"}>Get Cashback upto 50%</Text>
            </Box>
            <Box>
              <Text fontSize={"20px"} fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
            </Box>
            <Box>
              <Buttons bg={"#f64b3c"} color={"white"} />
            </Box>
          </Box>
        </Box>
    </div>
  )
}

export default HeroSection