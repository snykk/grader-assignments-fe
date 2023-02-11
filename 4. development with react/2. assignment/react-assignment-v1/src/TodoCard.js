function TodoCard({ todo }) {
    return (
        <div
            onClick={() => {
                alert(`todo dengan id ${todo.id} telah di clicked`);
            }}
            className="todo-card"
        >
            <h2>{todo.title}</h2>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
    );
}

export default TodoCard;
