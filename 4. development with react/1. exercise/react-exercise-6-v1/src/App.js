import { Task1, Task1_1, Task1_2, Task2, Task3 } from "./tasks";
import { Container, Heading, LightMode, Center } from "@chakra-ui/react";

const App = () => {
    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    };
    const properties = [...Array(10).fill(property)];

    return (
        <>
            <Container maxW="container.xl" mx="auto">
                <Heading textAlign="center" my="10">
                    Task 1
                </Heading>
                <LightMode>
                    <Task1 property={property}></Task1>
                </LightMode>
                <Heading textAlign="center" my="10">
                    Task 2
                </Heading>
                <LightMode>
                    <Task2 properties={properties}></Task2>
                </LightMode>
                <Heading textAlign="center" my="10">
                    Task 3
                </Heading>
                <Center>
                    <Task3 title="Modal Title" body="Modal Body" />
                </Center>
            </Container>
            <Task1_1></Task1_1>
            <Task1_2></Task1_2>
        </>
    );
};

export default App;
