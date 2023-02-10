const App = () => {
    return (
        <div>
            <Student name={"Djarot Purnomo"} isStudent={true} />
        </div>
    );
};

function Student({ name, isStudent }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>First name: {name.split(" ")[0]}</p>
            <p>Status: {isStudent ? "Student" : "Not student"}</p>
        </div>
    );
}

export default App;
export { Student };
