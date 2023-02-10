import React, { useState, useEffect } from "react";

function App() {
    const mapper = {
        all: "",
        basic: "fields=title,description",
        basicC: "fields=title,description,director,producer",
    };
    const [data, setData] = useState({});
    const [fields, setFields] = useState("all");

    useEffect(() => {
        document.getElementById("title").innerHTML = "Loading...";
        fetch(`https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49?${mapper[fields]}`)
            .then((response) => response.json())
            .then((json) => {
                document.getElementById("title").innerHTML = "";
                setData(json);
            });
    }, [fields]);

    const handleChange = (event) => {
        setFields(event.target.value);
    };

    return (
        <div>
            <div>
                <label>Fetch: </label>
                <select onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="basic">Basic</option>
                    <option value="basicC">Basic with Creator</option>
                </select>
            </div>
            {fields === "all" && (
                <div>
                    <img src={data.image} alt={data.title} />
                    <h2 id="title">{data.title}</h2>
                    <h4>{data.original_title}</h4>
                    <p>{data.release_date}</p>
                    <p>Rating: {data.rt_score}</p>
                    <p>Director: {data.director}</p>
                    <p>Producer: {data.producerx}</p>
                    <p>{data.description}</p>
                </div>
            )}
            {fields === "basic" && (
                <div>
                    <h2 id="title">{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            )}
            {fields === "basicC" && (
                <div>
                    <h2 id="title">{data.title}</h2>
                    <p>Director: {data.director}</p>
                    <p>Producer: {data.producerx}</p>
                    <p>{data.description}</p>
                </div>
            )}
        </div>
    );
}

export default App;
