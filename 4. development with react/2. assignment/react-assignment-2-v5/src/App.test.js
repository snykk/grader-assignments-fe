import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

beforeEach(() => {
    global.fetch = jest.fn((url) => {
        switch (url) {
            case "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0":
                return Promise.resolve({
                    json: async () => ({
                        count: 1154,
                        next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
                        previous: null,
                        results: [
                            {
                                name: "bulbasaur",
                                url: "https://pokeapi.co/api/v2/pokemon/1/",
                            },
                            {
                                name: "ivysaur",
                                url: "https://pokeapi.co/api/v2/pokemon/2/",
                            },
                        ],
                    }),
                });
            case "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20":
                return Promise.resolve({
                    json: async () => ({
                        count: 1154,
                        next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
                        previous: null,
                        results: [
                            {
                                name: "spearow",
                                url: "https://pokeapi.co/api/v2/pokemon/21/",
                            },
                        ],
                    }),
                });
            default:
        }
        url += url.endsWith("/") ? "" : "/";

        switch (url) {
            case "https://pokeapi.co/api/v2/pokemon/1/":
                return Promise.resolve({
                    json: async () => ({
                        abilities: [
                            {
                                ability: {
                                    name: "overgrow",
                                    url: "https://pokeapi.co/api/v2/ability/65/",
                                },
                                is_hidden: false,
                                slot: 1,
                            },
                            {
                                ability: {
                                    name: "chlorophyll",
                                    url: "https://pokeapi.co/api/v2/ability/34/",
                                },
                                is_hidden: true,
                                slot: 3,
                            },
                        ],
                        height: 7,
                        id: 1,
                        name: "bulbasaur",
                        sprites: {
                            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
                            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
                        },
                        stats: [
                            {
                                base_stat: 45,
                                effort: 0,
                                stat: {
                                    name: "hp",
                                    url: "https://pokeapi.co/api/v2/stat/1/",
                                },
                            },
                            {
                                base_stat: 49,
                                effort: 0,
                                stat: {
                                    name: "attack",
                                    url: "https://pokeapi.co/api/v2/stat/2/",
                                },
                            },
                            {
                                base_stat: 49,
                                effort: 0,
                                stat: {
                                    name: "defense",
                                    url: "https://pokeapi.co/api/v2/stat/3/",
                                },
                            },
                            {
                                base_stat: 45,
                                effort: 0,
                                stat: {
                                    name: "speed",
                                    url: "https://pokeapi.co/api/v2/stat/6/",
                                },
                            },
                        ],
                        types: [
                            {
                                slot: 1,
                                type: {
                                    name: "grass",
                                    url: "https://pokeapi.co/api/v2/type/12/",
                                },
                            },
                            {
                                slot: 2,
                                type: {
                                    name: "poison",
                                    url: "https://pokeapi.co/api/v2/type/4/",
                                },
                            },
                        ],
                        weight: 69,
                    }),
                });
            case "https://pokeapi.co/api/v2/pokemon/2/":
                return Promise.resolve({
                    json: async () => ({
                        abilities: [
                            {
                                ability: {
                                    name: "overgrow",
                                    url: "https://pokeapi.co/api/v2/ability/65/",
                                },
                                is_hidden: false,
                                slot: 1,
                            },
                            {
                                ability: {
                                    name: "chlorophyll",
                                    url: "https://pokeapi.co/api/v2/ability/34/",
                                },
                                is_hidden: true,
                                slot: 3,
                            },
                        ],
                        height: 10,
                        id: 2,
                        name: "ivysaur",
                        sprites: {
                            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
                            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
                            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
                        },
                        stats: [
                            {
                                base_stat: 60,
                                effort: 0,
                                stat: {
                                    name: "hp",
                                    url: "https://pokeapi.co/api/v2/stat/1/",
                                },
                            },
                            {
                                base_stat: 62,
                                effort: 0,
                                stat: {
                                    name: "attack",
                                    url: "https://pokeapi.co/api/v2/stat/2/",
                                },
                            },
                            {
                                base_stat: 63,
                                effort: 0,
                                stat: {
                                    name: "defense",
                                    url: "https://pokeapi.co/api/v2/stat/3/",
                                },
                            },
                            {
                                base_stat: 80,
                                effort: 1,
                                stat: {
                                    name: "special-attack",
                                    url: "https://pokeapi.co/api/v2/stat/4/",
                                },
                            },
                            {
                                base_stat: 80,
                                effort: 1,
                                stat: {
                                    name: "special-defense",
                                    url: "https://pokeapi.co/api/v2/stat/5/",
                                },
                            },
                            {
                                base_stat: 60,
                                effort: 0,
                                stat: {
                                    name: "speed",
                                    url: "https://pokeapi.co/api/v2/stat/6/",
                                },
                            },
                        ],
                        types: [
                            {
                                slot: 1,
                                type: {
                                    name: "grass",
                                    url: "https://pokeapi.co/api/v2/type/12/",
                                },
                            },
                            {
                                slot: 2,
                                type: {
                                    name: "poison",
                                    url: "https://pokeapi.co/api/v2/type/4/",
                                },
                            },
                        ],
                        weight: 130,
                    }),
                });
            case "https://pokeapi.co/api/v2/pokemon/21/":
                return Promise.resolve({
                    json: async () => ({
                        abilities: [
                            {
                                ability: {
                                    name: "keen-eye",
                                    url: "https://pokeapi.co/api/v2/ability/51/",
                                },
                                is_hidden: false,
                                slot: 1,
                            },
                            {
                                ability: {
                                    name: "sniper",
                                    url: "https://pokeapi.co/api/v2/ability/97/",
                                },
                                is_hidden: true,
                                slot: 3,
                            },
                        ],
                        height: 3,
                        id: 21,

                        name: "spearow",
                        sprites: {
                            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
                            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/21.png",
                            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
                            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/21.png",
                        },
                        stats: [
                            {
                                base_stat: 40,
                                effort: 0,
                                stat: {
                                    name: "hp",
                                    url: "https://pokeapi.co/api/v2/stat/1/",
                                },
                            },
                            {
                                base_stat: 60,
                                effort: 0,
                                stat: {
                                    name: "attack",
                                    url: "https://pokeapi.co/api/v2/stat/2/",
                                },
                            },
                            {
                                base_stat: 30,
                                effort: 0,
                                stat: {
                                    name: "defense",
                                    url: "https://pokeapi.co/api/v2/stat/3/",
                                },
                            },
                            {
                                base_stat: 31,
                                effort: 0,
                                stat: {
                                    name: "special-attack",
                                    url: "https://pokeapi.co/api/v2/stat/4/",
                                },
                            },
                            {
                                base_stat: 31,
                                effort: 0,
                                stat: {
                                    name: "special-defense",
                                    url: "https://pokeapi.co/api/v2/stat/5/",
                                },
                            },
                            {
                                base_stat: 70,
                                effort: 1,
                                stat: {
                                    name: "speed",
                                    url: "https://pokeapi.co/api/v2/stat/6/",
                                },
                            },
                        ],
                        types: [
                            {
                                slot: 1,
                                type: {
                                    name: "normal",
                                    url: "https://pokeapi.co/api/v2/type/1/",
                                },
                            },
                            {
                                slot: 2,
                                type: {
                                    name: "flying",
                                    url: "https://pokeapi.co/api/v2/type/3/",
                                },
                            },
                        ],
                        weight: 20,
                    }),
                });
            default:
                return Promise.reject(new Error("Not Found"));
        }
    });
});
describe("Home", () => {
    const setup = () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </MemoryRouter>
        );
    };
    it("should render Welcome message", async () => {
        setup();
        expect(screen.getAllByText("Welcome!")[0]).toBeInTheDocument();
    });
});

describe("Pokemon Detail", () => {
    const setup = () => {
        render(
            <MemoryRouter initialEntries={["/pokemon/1"]}>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </MemoryRouter>
        );
    };
    it("renders pokemon's name", async () => {
        setup();
        await waitFor(() => screen.findByRole("pokemon-detail"));
        expect(screen.getAllByText(/bulbasaur/i)[0]).toBeInTheDocument();
    });

    it("renders pokemon's types", async () => {
        setup();
        await waitFor(() => screen.findByRole("pokemon-detail"));
        expect(screen.getAllByText(/grass/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/poison/i)[0]).toBeInTheDocument();
    });

    it("renders pokemon's weight and height", async () => {
        setup();
        await waitFor(() => screen.findByRole("pokemon-detail"));
        expect(screen.getAllByText("69")[0]).toBeInTheDocument();
        expect(screen.getAllByText("7")[0]).toBeInTheDocument();
    });

    it("renders pokemon's abilities", async () => {
        setup();
        await waitFor(() => screen.findByRole("pokemon-detail"));
        expect(screen.getAllByText(/overgrow/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/chlorophyll/i)[0]).toBeInTheDocument();
    });

    it("renders pokemon's stats", async () => {
        setup();
        await waitFor(() => screen.findByRole("pokemon-detail"));
        expect(screen.getAllByText(/hp/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/defense/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/speed/i)[0]).toBeInTheDocument();
    });
});

describe("Pokemon List", () => {
    const setup = (page) => {
        const path = page ? `/pokemon?page=${page}` : "/pokemon";
        render(
            <MemoryRouter initialEntries={[path]}>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </MemoryRouter>
        );
    };
    it("renders list of Pokemon", async () => {
        setup();
        await waitFor(() => screen.findByRole("pokemon-list"));
        expect(screen.getByText("bulbasaur")).toBeInTheDocument();
        expect(screen.getByText("ivysaur")).toBeInTheDocument();
    });
    it("renders pokemon image in each list", async () => {
        setup();
        await waitFor(() => screen.findByRole("pokemon-list"));
        expect(screen.getAllByAltText(/Front Default/i)[0]).toBeInTheDocument();
        expect(screen.getAllByAltText(/Back Default/i)[0]).toBeInTheDocument();
        expect(screen.getAllByAltText(/Front Shiny/i)[0]).toBeInTheDocument();
        expect(screen.getAllByAltText(/Back Shiny/i)[0]).toBeInTheDocument();
    });
    describe("Pagination", () => {
        it("renders Prev button", async () => {
            setup();
            await waitFor(() => screen.findByRole("pokemon-list"));
            expect(screen.getByText(/prev/i)).toBeInTheDocument();
        });
        it("renders Next button", async () => {
            setup();
            await waitFor(() => screen.findByRole("pokemon-list"));
            expect(screen.getByText(/next/i)).toBeInTheDocument();
        });

        describe("when currently in page 1", () => {
            it("renders Prev button disabled", async () => {
                setup();
                await waitFor(() => screen.findByRole("pokemon-list"));
                expect(screen.getByText(/prev/i)).toBeDisabled();
            });
        });

        describe("when currently in page 2", () => {
            it("renders Prev button enabled", async () => {
                setup(2);
                await waitFor(() => screen.findByRole("pokemon-list"));
                expect(screen.getByText(/prev/i)).toBeEnabled();
            });
        });

        describe("when Next button is clicked", () => {
            it("renders the next page", async () => {
                setup();
                await waitFor(() => screen.findByRole("pokemon-list"));
                fireEvent.click(screen.getByText(/next/i));
                await waitFor(() => screen.findByRole("pokemon-list"));
                await waitFor(() => screen.findByText(/spearow/i));
                expect(screen.getByText("spearow")).toBeInTheDocument();
            });
        });

        describe("when Prev button is clicked", () => {
            it("renders the previous page", async () => {
                setup(2);
                await waitFor(() => screen.findByRole("pokemon-list"));
                fireEvent.click(screen.getByText(/prev/i));
                await waitFor(() => screen.findByRole("pokemon-list"));
                await waitFor(() => screen.findByText(/ivysaur/i));
                expect(screen.getByText("bulbasaur")).toBeInTheDocument();
                expect(screen.getByText("ivysaur")).toBeInTheDocument();
            });
        });
    });

    describe("when clicking on a Pokemon", () => {
        it("navigates to Pokemon Detail page", async () => {
            setup();

            await waitFor(() => screen.findByRole("pokemon-list"));
            fireEvent.click(screen.getByText("bulbasaur"));
            await waitFor(() => screen.findByRole("pokemon-detail"), {
                timeout: 15000,
            });

            expect(screen.getByRole("pokemon-detail")).toBeInTheDocument();
        });
    });
});

describe("Legend Page", () => {
    const setup = (password) => {
        let path = "/legend";
        if (password !== undefined) {
            path += `?password=${password}`;
        }
        render(
            <MemoryRouter initialEntries={[path]}>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </MemoryRouter>
        );
    };
    it("is not accessible without password parameter", () => {
        setup();
        expect(screen.getByText(/not authorized/i)).toBeInTheDocument();
    });

    it("is accessible with correct password paremeter", () => {
        setup("secret");
        expect(screen.queryByText(/not authorized/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/Arceus/i)).toBeInTheDocument();
    });

    it("is not accessible with incorrect password paremeter", () => {
        setup("wrong");
        expect(screen.getByText(/not authorized/i)).toBeInTheDocument();
    });

    it("is accessible by double clicking Legend button", () => {
        setup();
        fireEvent.doubleClick(screen.getByText(/Legend/i));
        expect(screen.queryByText(/not authorized/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/Arceus/i)).toBeInTheDocument();
    });
});
