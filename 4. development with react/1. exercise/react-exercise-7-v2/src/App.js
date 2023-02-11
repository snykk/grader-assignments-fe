import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./layouts/Main";
import People from "./routes/People";
import PeopleDetail from "./routes/PeopleDetail";
import Planets from "./routes/Planets";
import PlanetDetail from "./routes/PlanetDetail";
import Movies from "./routes/Movies";
import MovieDetail from "./routes/MovieDetail";
import NotFound from "./routes/NotFound";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="star-wars" element={<Main />}>
                <Route path="people">
                    <Route index element={<People />} />
                    <Route path=":id" element={<PeopleDetail />} />
                </Route>
                <Route path="planets">
                    <Route index element={<Planets />} />
                    <Route path=":id" element={<PlanetDetail />} />
                </Route>
                <Route path="movies">
                    <Route index element={<Movies />} />
                    <Route path=":id" element={<MovieDetail />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
