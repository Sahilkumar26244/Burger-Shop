import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <Box bg={"#222222"} h={"60vh"} display={"flex"} alignItems={"center"}>
        <Box display={"flex"} w={"100%"} p={"100px"} gap={"50px"}>
          <Box w={"40%"} display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Box>
              <Text color={"white"} fontSize={"25px"} fontWeight={500}>Title Here</Text>
            </Box>
            <Box>
              <Text color={"white"} fontSize={"15px"} fontWeight={400}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
            </Box>
            <Box>
              <Flex gap={"10px"}> 
                <Box borderRadius={"50%"} bg={"white"} w={10} h={10} display={"flex"} alignItems={"center"} justifyContent={"center"}><IoLogoInstagram style={{fontSize:"30px"}} /></Box>
                <Box borderRadius={"50%"} bg={"white"} w={10} h={10} display={"flex"} alignItems={"center"} justifyContent={"center"}><FaFacebookF style={{fontSize:"28px"}}/></Box>
                <Box borderRadius={"50%"} bg={"white"} w={10} h={10} display={"flex"} alignItems={"center"} justifyContent={"center"}><FaTwitter style={{fontSize:"30px"}}/></Box>
                <Box borderRadius={"50%"} bg={"white"} w={10} h={10} display={"flex"} alignItems={"center"} justifyContent={"center"}><FaWhatsapp style={{fontSize:"30px"}}/></Box>
              </Flex>
            </Box>
          </Box>
          <Box w={"60%"} display={"flex"} justifyContent={"space-evenly"} color={"white"}>
            <Box>
              <Box fontSize={"25px"} fontWeight={500}>
                About
              </Box>
              <Box fontSize={"15px"} fontWeight={400} display={"flex"} flexDirection={"column"} gap={"5px"} pt={"15px"}>
                <Text>History</Text>
                <Text>Our Team</Text>
                <Text>Brand Guidelines</Text>
                <Text>Terms & Condition</Text>
                <Text>Privacy Policy</Text>
              </Box>
            </Box>
            <Box>
              <Box fontSize={"25px"} fontWeight={500}>
                Services
              </Box>
              <Box fontSize={"15px"} fontWeight={400} display={"flex"} flexDirection={"column"} gap={"5px"} pt={"15px"}>
                <Text>How to Order</Text>
                <Text>Our Products</Text>
                <Text>Order Status</Text>
                <Text>Promo</Text>
                <Text>Payment Method</Text>
              </Box>
            </Box>
            <Box>
              <Box fontSize={"25px"} fontWeight={500}>
                Others
              </Box>
              <Box fontSize={"15px"} fontWeight={400} display={"flex"} flexDirection={"column"} gap={"5px"} pt={"15px"}>
                <Text>Contact Us</Text>
                <Text>Help</Text>
                <Text>Privacy</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Footer