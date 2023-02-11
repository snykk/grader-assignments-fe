import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Text, HStack, Box, VStack, Container, Heading } from "@chakra-ui/react";

const MovieDetail = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const loadDetail = async () => {
            setLoading(true);
            try {
                const url = `https://swapi.py4e.com/api/films/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                setDetail(data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadDetail();
    }, [id]);

    return (
        <Container>
            <HStack direction="row" marginTop={5} marginBottom={5}>
                <BackButton />
                <Heading as="h1" size="xl">
                    {detail?.title}
                </Heading>
            </HStack>

            {!loading ? (
                <VStack alignItems="start">
                    <Box>
                        <Heading as="h2" size="md">
                            Release Date
                        </Heading>
                        <Text>{detail?.release_date}</Text>
                    </Box>
                    <Box>
                        <Heading as="h2" size="md">
                            Produced By
                        </Heading>
                        <p>{detail?.producer}</p>
                    </Box>

                    <Box>
                        <Heading as="h2" size="md">
                            Directed By
                        </Heading>
                        <p>{detail?.director}</p>
                    </Box>

                    <Box>
                        <Heading as="h2" size="md">
                            Summary
                        </Heading>
                        <p>{detail?.opening_crawl}</p>
                    </Box>
                </VStack>
            ) : (
                <Text size="md">Loading...</Text>
            )}
        </Container>
    );
};

export default MovieDetail;
