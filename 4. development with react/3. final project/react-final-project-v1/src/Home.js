import React, { useState, useEffect } from "react";
import { SimpleGrid, Select, Box, Heading } from "@chakra-ui/react";
import Cards from "./Cards";

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4/`);
            const data = await response.json();
            setData(data.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    function sortData(type) {
        setSortBy(type);
        let sortedData = [...data];
        if (type === "name") {
            sortedData.sort((a, b) => a[type].localeCompare(b[type]));
        } else {
            sortedData.sort((a, b) => a[type] - b[type]);
        }
        setData(sortedData);
    }

    return (
        <Box px={20} py={10}>
            <Select mb={5} name="sort" onChange={(e) => sortData(e.target.value)} value={sortBy}>
                <option value="">Sort by</option>
                <option value="name">Name</option>
                <option value="atk">Attack</option>
                <option value="def">Defence</option>
            </Select>
            {loading ? (
                <Box>
                    <Heading as="h1">Loading...</Heading>
                </Box>
            ) : (
                <SimpleGrid columns={4} spacing={4}>
                    {data.length > 0 && data.map((item) => <Cards key={item.id} card={item} />)}
                </SimpleGrid>
            )}
        </Box>
    );
}

export default Home;
