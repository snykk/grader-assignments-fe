import React, { useState, useEffect } from "react";
import { Box, Image, Heading, Text, Button, SimpleGrid, HStack } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
            const data = await response.json();
            setCard(data.data[0]);
            setLoading(false);
        }
        fetchData();
    }, [id]);

    if (loading) {
        return <Heading as="h1">Loading...</Heading>;
    }

    return (
        <Box px={20} py={10}>
            <Button mb={5} as={Link} to="/">
                Back
            </Button>
            <Box>
                <HStack alignItems="flex-start">
                    <Image w={200} src={card.card_images[0].image_url} />
                    <Box>
                        <Heading as="h2" size="md">
                            {card.name}
                        </Heading>
                        <Text>Level: {card.level}</Text>
                        <Text> {card.attribute}</Text>
                        <Text>
                            {" "}
                            ATK/{card.atk} DEF/{card.def}
                        </Text>
                        <Text>
                            [ {card.type} / {card.race} ]
                        </Text>
                        <Text>Description: {card.desc}</Text>
                    </Box>
                </HStack>

                <SimpleGrid mt={10} columns={[1, 2, 4]} gap={10}>
                    {card.card_sets.map((set) => (
                        <Box key={set.set_code}>
                            <Text>Name: {set.set_name}</Text>
                            <Text>Code: {set.set_code}</Text>
                            <Text>Rarity: {set.set_rarity}</Text>
                            <Text>Rarity: {set.set_rarity}</Text>
                            <Text>Price: {set.set_price}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Detail;
