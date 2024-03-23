import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ChefBox from '../Common/ChefBox'
import chef1 from "../assets/chef1.jpg"
import banner2 from "../assets/banner2.png"

function OurChef() {
  return (
    <div>
        <Box bg={"#f6eedf"} color={"#f64b3c"} backgroundImage={banner2} backgroundSize={"cover"} h={{base:"auto",lg:"100vh"}} backgroundAttachment={"fixed"}>
            <Box p={"80px 50px 60px 50px"} w={{base:"90%",lg:"1250px"}} m={"auto"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Box>
                    <Text textAlign={"center"} fontSize={{base:"30px",lg:"60px"}} fontWeight={700}>Our Chef</Text>
                </Box>
                <Box w={{base:"100%",lg:"50%"}} m={"auto"}>
                    <Text textAlign={"center"} fontSize={{base:"10px",lg:"20px"}} fontWeight={400}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae urna efficitur</Text>
                </Box>
                <Box mt={"40px"}>
                    <Flex justifyContent={"space-around"} direction={{base:"column",lg:"row"}} gap={"20px"}>
                        <ChefBox image={chef1} name={"Aiden Hunter"} position={"Founder"} />
                        <ChefBox image={chef1} name={"Ethel Ramsey"} position={"Co-Founder"} />
                        <ChefBox image={chef1} name={"Fannie stewart"} position={"Co-Founder"} />
                    </Flex>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default OurChef