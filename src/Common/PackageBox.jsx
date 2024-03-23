import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo3 from "../assets/logo3.svg"
import Buttons from './Buttons'

function PackageBox({p,price,desc}) {
  return (
    
        <Box p={"20px"} bg={"white"} borderRadius={"10px"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={"20px"} w={{base:"auto",lg:"250px"}}>
            <Box>
                <Text fontSize={{base:"15px",lg:"20px"}} fontWeight={700} textTransform={"uppercase"}>{p}</Text>
            </Box>
            <Box>
                <Image src={logo3} w={"80px"}  />
            </Box>
            <Box>
                <Text textAlign={"center"} fontSize={"18px"} fontWeight={600}>${price}</Text>
                <Text textAlign={"center"} fontSize={"15px"} fontWeight={600}>{desc}</Text>
            </Box>
            <Box>
                <Buttons bg={"#f64b3c"} color={"white"}/>
            </Box>
        </Box>
    
  )
}

export default PackageBox