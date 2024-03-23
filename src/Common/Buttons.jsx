import { Button } from "@chakra-ui/react";
import React from "react";

function Buttons({bg,color}) {
  return (
    <div>
      <Button
        textTransform={"uppercase"}
        bg={bg}
        color={color}
        borderRadius={"20px"}
        p={"10px 40px"}
        display={"flex"}
        alignItems={"center"}
        _hover={{bg:"#f6eedf",border:"2px solid #f64b3c",color:"#f64b3c"}}
        fontSize={"16px"}
        fontWeight={600}
      >
        Order Now
      </Button>
    </div>
  );
}

export default Buttons;
