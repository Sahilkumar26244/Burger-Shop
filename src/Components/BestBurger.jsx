import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Buttons from '../Common/Buttons'
import burger1 from "../assets/burger1.jpg"

function BestBurger() {
  return (
    <div>
        <Box bg={"#f64b3c"}>
            <Flex gap={"100px"} w={{base:"90%",lg:"1250px"}} m={"auto"} p={"150px 50px"} direction={{base:"column",lg:'row'}}>
                <Box w={{base:"100%",lg:"50%"}}>
                    <Image w={"500px"} borderRadius={"50%"} src={burger1} objectFit={"contain"} />
                </Box>
                <Box w={{base:"100%",lg:"60%"}} display={"flex"} alignItems={"center"} color={"white"}>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Box>
                            <Text fontSize={{base:"30px",lg:"60px"}} fontWeight={700} textAlign={{base:"center",lg:"left"}}>Best Burger</Text>
                        </Box>
                        <Box w={{base:"100%",lg:"70%"}}>
                            <Text fontSize={{base:"10px",lg:"20px"}} fontWeight={400} textAlign={{base:"center",lg:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
                        </Box>
                        <Box mt={"40px"} display={"flex"} justifyContent={{base:"center",lg:"flex-start"}}>
                            <Buttons bg={"white"} color={"#f64b3c"} />
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default BestBurger