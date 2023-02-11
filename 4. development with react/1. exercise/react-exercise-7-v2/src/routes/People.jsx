import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import peopleThumbnail from "../assets/people.jpeg";
import BackButton from "../components/BackButton";
import { Card, SimpleGrid, CardBody, Text, Image, HStack, Container, Heading } from "@chakra-ui/react";

const People = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadPeople = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://swapi.py4e.com/api/people/");
            const data = await response.json();
            setPeople(data.results);
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
        loadPeople();
    }, []);

    return (
        <Container>
            <HStack direction="row" marginTop={5} marginBottom={5}>
                <BackButton />
                <Image src={peopleThumbnail} width="40px" />
                <Heading as="h1" size="xl">
                    People
                </Heading>
            </HStack>
            {!loading ? (
                <SimpleGrid columns={2} spacing={4}>
                    {people.length &&
                        people.map((person, index) => (
                            <Link key={index} to={"/star-wars/people/" + getID(person.url)}>
                                {person.name}
                            </Link>
                        ))}
                </SimpleGrid>
            ) : (
                <Text>Loading...</Text>
            )}
        </Container>
    );
};

export default People;
