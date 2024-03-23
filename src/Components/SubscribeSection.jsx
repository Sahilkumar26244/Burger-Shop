import React from "react";
import banner3 from "../assets/banner3.png";
import { Box, Flex, Input, Text } from "@chakra-ui/react";

function SubscribeSection() {
  return (
    <div>
      <Box
        backgroundImage={banner3}
        backgroundSize={"cover"}
        h={{ base: "auto", lg: "110vh" }}
        backgroundAttachment={"fixed"}
        color={"#f64b3c"}
      >
        <Box w={{ base: "90%", lg: "1250px" }} m={"auto"} p={"150px 50px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Box>
            <Text textAlign={"center"} fontSize={{base:"30px",lg:"60px"}} fontWeight={700}>Don't Miss Our Update</Text>
          </Box>
          <Box w={{base:"100%",lg:"50%"}} m={"auto"}>
            <Text textAlign={"center"} fontSize={{base:"10px",lg:"20px"}} fontWeight={400}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
          </Box>
          <Box mt={"50px"}>
            <Flex bg={"white"} w={{base:"100%",lg:"60%"}} m={"auto"} borderRadius={"30px"}>
                <Box w={"70%"} p={"7px 0px 7px 19px"} >
                    <Input variant={"unstyled"} placeholder="Your Email" />
                </Box>
                <Box bg={"#f64b3c"} color={"white"} borderRadius={"0px 30px 30px 0px"} w={"30%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Text fontSize={{base:"10px",lg:"18px"}} fontWeight={{base:500,lg:700}}>SUBSCRIBE</Text>
                </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default SubscribeSection;
