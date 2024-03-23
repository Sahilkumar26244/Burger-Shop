import { Box, Circle, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Statistics() {
  return (
    <div>
        <Box bg={"#f64b3c"} color={"white"} h={{base:"auto",lg:"110vh"}} display={"flex"} alignItems={"center"}>
            <Box p={"80px 50px 60px 50px"} w={{base:"90%",lg:"1250px"}} m={"auto"} border={"1px solid black"}>
                <Box>
                    <Text textAlign={"center"} fontSize={{base:"30px",lg:"60px"}} fontWeight={700}>Statistics</Text>
                </Box>
                <Box w={{base:"100%",lg:"50%"}} m={"auto"}>
                    <Text textAlign={"center"} fontSize={{base:"10px",lg:"20px"}} fontWeight={400}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
                </Box>
                <Flex direction={{base:"column",lg:"row"}} gap={"20px"} justifyContent={"space-around"} mt={"40px"} alignItems={"center"}>
                    <Circle size={"200px"} border={"4px solid white"} borderRadius={"50%"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                            <Text fontSize={{base:"25px",lg:"50px"}} fontWeight={600}>70k</Text>
                            <Text fontSize={{base:"10px",lg:"20px"}} fontWeight={600}>Customer</Text>
                        </Box>
                    </Circle>
                    <Circle size={"200px"} border={"4px solid white"} borderRadius={"50%"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                            <Text fontSize={{base:"25px",lg:"50px"}} fontWeight={600}>109</Text>
                            <Text fontSize={{base:"10px",lg:"20px"}} fontWeight={600}>Outlet</Text>
                        </Box>
                    </Circle>
                    <Circle size={"200px"} border={"4px solid white"} borderRadius={"50%"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                            <Text fontSize={{base:"25px",lg:"50px"}} fontWeight={600}>35</Text>
                            <Text fontSize={{base:"10px",lg:"20px"}} fontWeight={600}>Country</Text>
                        </Box>
                    </Circle>
                </Flex>
            </Box>
        </Box>
    </div>
  )
}

export default Statistics