import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Text, HStack, Box, VStack, Container, Heading } from "@chakra-ui/react";

const PeopleDetail = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const loadDetail = async () => {
      setLoading(true);
      try {
        const url = "https://swapi.py4e.com/api/people/" + id;
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
        <Heading as="h1" size="xl">{detail?.name}</Heading>
      </HStack>

      {!loading ? (
        <VStack alignItems="start">
          <Box>
            <Heading as="h2" size="md">Gender</Heading>
            <Text>{detail?.gender}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">Birth Year</Heading>
            <Text>{detail?.birth_year}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">Mass</Heading>
            <Text>{detail?.mass}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">Height</Heading>
            <Text>{detail?.height}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">Eye Color</Heading>
            <Text>{detail?.eye_color}</Text>
          </Box>
        </VStack>
      ) : (
        <Text size="md">Loading...</Text>
      )}
    </Container>
  );
};

export default PeopleDetail;
