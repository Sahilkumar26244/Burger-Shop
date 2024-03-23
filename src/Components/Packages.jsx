import React from 'react';
import banner2 from "../assets/banner2.png"
import { Box, Flex, Text } from '@chakra-ui/react';
import PackageBox from '../Common/PackageBox';

function Packages() {
  return (
    <div>
        <Box color={"#f64b3c"} backgroundImage={banner2} backgroundSize={"cover"} h={{base:"auto",lg:"110vh"}} backgroundAttachment={"fixed"}>
            <Box p={"80px 50px 60px 50px"} w={{base:"90%",lg:"1250px"}} m={"auto"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Box>
                    <Text textAlign={"center"} fontSize={{base:"30px",lg:"60px"}} fontWeight={700}>Popular Package</Text>
                </Box>
                <Box mt={"40px"} >
                    <Flex justifyContent={"space-around"} direction={{base:"column",lg:"row"}} gap={"20px"} border={"1px solid"}>
                        <PackageBox p={"package i"} price={"10.00"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <PackageBox p={"package ii"} price={"20.00"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                        <PackageBox p={"package iii"} price={"30.00"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    </Flex>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Packages