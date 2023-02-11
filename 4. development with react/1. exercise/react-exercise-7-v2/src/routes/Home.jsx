import React from "react";
import { Link } from "react-router-dom";
import people from "../assets/people.jpeg";
import planets from "../assets/planets.jpeg";
import movies from "../assets/movies.jpeg";
import { Container, Heading } from "@chakra-ui/react";
import { Card, Image, SimpleGrid, Text, CardBody } from "@chakra-ui/react";

const Home = () => {
    const links = [
        {
            to: "/star-wars/people",
            name: "People",
            image: people,
        },
        {
            to: "/star-wars/planets",
            name: "Planets",
            image: planets,
        },
        {
            to: "/star-wars/movies",
            name: "Movies",
            image: movies,
        },
    ];
    return (
        //  Align the Container to middle vertically
        <Container>
            <SimpleGrid columns={3} spacing={2} marginTop={200}>
                {links.map((item, index) => (
                    <Link key={index} to={item.to}>
                        <Image src={item.image} width="40px" />
                        <Heading as="h1" size="xl">
                            {item.name}
                        </Heading>
                    </Link>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Home;
