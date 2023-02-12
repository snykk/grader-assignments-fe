import React from "react";
import { Routes, Route } from "react-router-dom";

import { Heading, Box, Center } from "@chakra-ui/react";

import Home from "./Home.js";
import Details from "./Detail.js";
import NotFound from "./NotFound.js";

const App = () => {
    const MyRouter = () => (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/card/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );

    return (
        <div className="App">
            {/* Navbar */}
            <Box w="100vw" bg="#b25819" p={6}>
                <Center>
                    <Heading as="h1" color="#e2ded5">
                        Yugi-Oh Card Deck
                    </Heading>
                </Center>
            </Box>

            {/* Route */}
            <MyRouter />
        </div>
    );
};

export default App;
