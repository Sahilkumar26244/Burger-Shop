import {
    Badge,
    Box,
    Collapse,
    Flex,
    Icon,
    IconButton,
    Image,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";

  import { MdKeyboardArrowDown } from "react-icons/md";

  import logo from "../assets/logo.svg"
  
  
  function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={" !important"}
          color={"white"}
          minH={"25px"}
          px={{ base: 10, md: 20, lg: "70px" }}
          py={{ base: "10px", md: "24px", lg: "35px" }}
          borderBottom={1}
          align={"center"}
          position="fixed" // Add sticky positioning
          top={"0"} // Stick to the top of the viewport
          zIndex="1000"
          as="nav"
          w={"100%"}
        >
          <Flex
            w={"100%"}
            py={{ base: 2, lg: 1 }}
            justify={{ base: "center", md: "start" }}
            justifyContent={"space-between"}
          >
            
              <Box
                mt={"0px"}
                w={{ base: "20%", xl: "5%" }}
                display={"flex"}
                alignItems={"center"}
                pl={"20px"}
              >
                <Image src={logo} w={"40px"} h={"100%"} objectFit={"contain"} />
              </Box>
            
  
            <Flex
              pl={"60px"}
              pr={"40px"}
              w={"100%"}
              justifyContent={"flex-end"}
              display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <DesktopNav color={"white"} background={"white"} />
              </Box>
            </Flex>
  
            {/* yha pe lgana */}
  
            {/* yha pe lgana */}
          </Flex>
          <Flex
            alignItems={"center"}
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
          >
            <IconButton
              color={"white"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={{ base: 4, lg: 6 }} h={{ base: 5, lg: 6 }} />
                ) : (
                  <HamburgerIcon
                    w={{ base: 5, lg: 10 }}
                    h={{ base: 5, lg: 10 }}
                  />
                )
              }
              variant={""}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav y={"10px"} opacity={""} />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = ({ color, background }) => {
    return (
      <Stack direction={"row"} spacing={5}>
        {NAV_ITEMS.map((navItem, index) => (
          <Box key={index}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    as="a"
                    p={2}
                    fontSize={"15px"}
                    fontWeight={600}
                    letterSpacing={"1px"}
                    
                    color={color}
                    opacity={1}
                    _hover={{
                      textDecoration: "none",
                      color: "#8bc53f",
                    }}
                  >
                    <Text textTransform={"uppercase"}>
                    {navItem.label}
                    </Text>
                    
                  </Box>
                
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={background}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child, index) => (
                      <DesktopSubNav key={index} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Box
        as="a"
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("#8bc53f", "gray.900") }}
      >
        <Stack
          direction={"row"}
          align={"center"}
          _hover={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Box>
            
              <Text transition={"all .3s ease"} fontWeight={500}>
                {label}
              </Text>
            
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    );
  };
  
  const MobileNav = ({ y, opacity }) => {
    return (
      <Stack
        bg={useColorModeValue("black", "white")}
        p={"20px 50px"}
        display={{ md: "flex", xl: "none" }}
        mt={{ base: "60px", md: "70px", lg: "110px" }}
        position="fixed" // Add sticky positioning
        top={y} // Stick to the top of the viewport
        zIndex="1000"
        as="nav"
        w={"100%"}
        opacity={opacity}
      >
        {NAV_ITEMS.map((navItem, index) => (
          <MobileNavItem key={index} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={0} onClick={children && onToggle}>
        <Box
          pl={{ lg: 10 }}
          py={2}
          as="a"
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Flex gap={"10px"} alignItems={"center"}>
            
              <Text
                fontSize={{ lg: "30px" }}
                fontWeight={600}
                color={"white"}
              >
                {label}
              </Text>
           
  
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
              />
            )}
          </Flex>
        </Box>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={0}
            ml={{ lg: 10 }}
            mr={{ lg: 10 }}
            borderTop={"1px solid lightgrey"}
            align={"start"}
          >
            {children &&
              children.map((child, index) => (
                <Box
                  fontSize={{ lg: "25px" }}
                  fontWeight={600}
                  pl={5}
                  w={"100%"}
                  as="a"
                  key={index}
                  py={2}
                  borderBottom={"1px solid lightgrey"}
                >
                  {child.label}
                </Box>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: "Home",
      href:"/about"
    },
    {
      label: "Products",
      href: "/productPractices",
    },
    {
      label: "Promo",
      href: "/contactUs",
    },
    {
        label: "About",
        href: "/contactUs",
      },
      {
        label: "Contact",
        href: "/contactUs",
      },
  ];
  
  export default Navbar;
  