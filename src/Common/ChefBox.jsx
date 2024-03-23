import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

function ChefBox({image,name,position}) {
  return (
    <div>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"} alignItems={"center"}>
            <Box>
                <Image src={image} borderRadius={"50%"} w={"170px"} h={"170px"} objectFit={"cover"}/>
            </Box>
            <Box>
                <Text fontSize={{base:"15px",lg:"30px"}} fontWeight={600}>{name}</Text>
            </Box>
            <Box>
                <Text fontSize={{base:"10px",lg:"20px"}} fontWeight={500}>{position}</Text>
            </Box>
        </Box>
    </div>
  )
}

export default ChefBox