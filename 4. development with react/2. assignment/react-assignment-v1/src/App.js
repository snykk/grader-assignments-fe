import "./App.css";
import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        };

        fetchTodos();
    }, []);

    return <div>{isLoading ? <h1>Loading...</h1> : todos.length > 0 && todos.map((item, index) => <TodoCard key={index} todo={item} />)}</div>;
};

export default App;
