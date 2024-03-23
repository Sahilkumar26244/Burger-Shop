import { Button, Image } from "@chakra-ui/react";
import React from "react";
import dummy from "../assets/dummy.png";

function Buttons() {
  return (
    <div>
      <Button
        textTransform={"uppercase"}
        bg={"#f64b3c"}
        color={"white"}
        borderRadius={"20px"}
        p={"10px 40px"}
        display={"flex"}
        alignItems={"center"}
        _hover={{bg:"#f6eedf",border:"2px solid #f64b3c",color:"#f64b3c"}}
      >
        Order Now
      </Button>
    </div>
  );
}

export default Buttons;
