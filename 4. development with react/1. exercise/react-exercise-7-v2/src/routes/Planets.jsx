import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import planetsThumbnail from "../assets/planets.jpeg";
import BackButton from "../components/BackButton";
import { Card, SimpleGrid, CardBody, Text, Image, HStack, Container, Heading } from "@chakra-ui/react";

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadPlanets = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://swapi.py4e.com/api/planets");
            const data = await response.json();
            setPlanets(data.results);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const getID = (url) => {
        const parsed = url?.split("/");
        return parsed[parsed.length - 2];
    };

    useEffect(() => {
        loadPlanets();
    }, []);

    return (
        <Container>
            <HStack direction="row" marginTop={5} marginBottom={5}>
                <BackButton />
                <Image src={planetsThumbnail} width="40px" />
                <Heading as="h1" size="xl">
                    Planets
                </Heading>
            </HStack>

            {!loading ? (
                <SimpleGrid columns={2} spacing={4}>
                    {planets.length &&
                        planets.map((planet, index) => (
                            <Link key={index} to={"/star-wars/planets/" + getID(planet.url)}>
                                {planet.name}
                            </Link>
                        ))}
                </SimpleGrid>
            ) : (
                <Text>Loading...</Text>
            )}
        </Container>
    );
};

export default Planets;
