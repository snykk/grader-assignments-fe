import { useEffect, useState } from "react";
import { Badge, Tr, Td, HStack, VStack, Heading, Box } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
    return (
        <Box>
            {pokemon && (
                <Box role="pokemon-detail">
                    <VStack align="stretch">
                        <Heading as="h3" size="md">
                            {pokemon.name}
                        </Heading>
                        <HStack mt={1}>
                            {pokemon.types.map((type) => (
                                <Badge variantColor="teal" key={type.type.name}>
                                    {type.type.name}
                                </Badge>
                            ))}
                        </HStack>
                    </VStack>
                    <HStack>
                        <Image src={pokemon.sprites.front_default} alt="Front Default" />
                        <Image src={pokemon.sprites.back_default} alt="Back Default" />
                        <Image src={pokemon.sprites.front_shiny} alt="Front Shiny" />
                        <Image src={pokemon.sprites.back_shiny} alt="Back Shiny" />
                    </HStack>
                    <Table>
                        <Tbody>
                            <Tr>
                                <Td>Height</Td>
                                <Td>{pokemon.height}</Td>
                            </Tr>
                            <Tr>
                                <Td>Weight</Td>
                                <Td>{pokemon.weight}</Td>
                            </Tr>
                            <Tr>
                                <Td>Base Experience</Td>
                                <Td>{pokemon.base_experience}</Td>
                            </Tr>
                            <Tr>
                                <Td>abilities</Td>
                                <Td>
                                    {pokemon.abilities.map((item, index) => (
                                        <div key={index}>{item.ability.name}</div>
                                    ))}
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Stats</Td>
                                <Td>
                                    {pokemon.stats.map((item, index) => (
                                        <div key={index}>
                                            {item.stat.name}: {item.base_stat}
                                        </div>
                                    ))}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            )}
        </Box>
    );
};
const Page = () => {
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemon = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json();
        setPokemon(data);
    };

    useEffect(() => {
        fetchPokemon(pokemonId);
    }, [pokemonId]);

    return <Detail pokemon={pokemon} />;
};

export default Page;
