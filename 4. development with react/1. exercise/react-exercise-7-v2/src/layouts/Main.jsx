import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import logo from "../assets/star-wars-logo.png";
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

const PATHS = [
  { to: "/star-wars/people", label: "People" },
  { to: "/star-wars/planets", label: "Planets" },
  { to: "/star-wars/movies", label: "Movies" },
];

const Main = () => {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Link to="/">
            <Image src={logo} width={24} alt="Star Wars Logo" />
          </Link>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {PATHS.map((path) => (
              <NavLink to={path.to} key={path.to}>{path.label}</NavLink>
            ))}
          </HStack>
        </HStack>
        </Flex>
        </Box>
      <Box><Outlet/></Box>
      </>
  
  );
};

export default Main;
