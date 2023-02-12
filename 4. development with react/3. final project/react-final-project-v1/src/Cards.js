import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {
    console.log("ini card", card);
    return (
        <Link to={`/card/${card.id}`}>
            <Box className="yugioh-card">
                <Image src={card.card_images[0].image_url} />
                <Heading as="h2" size="md">
                    {card.name}
                </Heading>
            </Box>
        </Link>
    );
}

export default Card;
