import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import banner3 from "../assets/banner3.png"
import burger2 from "../assets/burger2.jpg"
import Buttons from '../Common/Buttons'

function BigBurger() {
  return (
    <div>
        <Box backgroundImage={banner3} backgroundSize={"cover"} h={{base:"auto",lg:"110vh"}} backgroundAttachment={"fixed"}>
            <Flex gap={"100px"}  w={{base:"90%",lg:"1250px"}} m={"auto"} p={"150px 50px"} direction={{base:"column",lg:'row'}}>
                <Box w={{base:"100%",lg:"60%"}} display={"flex"} alignItems={"center"}>
                    <Box display={"flex"} flexDirection={"column"} color={"#f64b3c"}>
                        <Box>
                            <Text fontSize={{base:"30px",lg:"60px"}} fontWeight={700} textAlign={{base:"center",lg:"left"}}>Big Burger</Text>
                        </Box>
                        <Box w={{base:"100%",lg:"70%"}}>
                            <Text fontSize={{base:"10px",lg:"20px"}} fontWeight={400} textAlign={{base:"center",lg:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
                        </Box>
                        <Box mt={"40px"} display={"flex"} justifyContent={{base:"center",lg:"flex-start"}}>
                            <Buttons bg={"#f64b3c"} color={"white"} />
                        </Box>
                    </Box>
                </Box>
                <Box w={{base:"100%",lg:"50%"}}>
                    <Image w={"500px"} h={{base:"230px",lg:"500px"}} borderRadius={"100px"} src={burger2} objectFit={"cover"} />
                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default BigBurger