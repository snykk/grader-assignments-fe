import { useState } from "react";

function Task1() {
    return (
        <div className="basic_component">
            <h1>Halo dunia!</h1>
        </div>
    );
}

function Task1_1(props) {
    return <h1>{props.name}</h1>;
}

function Task2() {
    const [iniState, setIniState] = useState("Klik tombol di bawah");

    return (
        <div>
            <h1>{iniState}</h1>
            <button
                onClick={() => {
                    setIniState("Tombol telah di-klik!");
                }}
            >
                Klik saya!
            </button>
        </div>
    );
}

const students = [
    {
        name: "John Doe",
        age: 20,
        dropout: false,
    },
    {
        name: "Jane Doe",
        age: 21,
        dropout: true,
    },
    {
        name: "John Smith",
        age: 22,
        dropout: false,
    },
    {
        name: "Jane Smith",
        age: 23,
        dropout: true,
    },
];

function Task3() {
    return (
        <ul>
            {students.map((item, index) => (
                <li key={index}>
                    <h2>
                        {item.name} - {item.age}
                    </h2>
                </li>
            ))}
        </ul>
    );
}

function Task3_1() {
    const filteredStudents = students.filter((item) => !item.dropout);

    return (
        <ul>
            {filteredStudents.map((item, index) => (
                <li key={index}>
                    <h2>
                        {item.name} - {item.age}
                    </h2>
                </li>
            ))}
        </ul>
    );
}

function Task4() {
    const [isShow, setIsShow] = useState(true);

    return (
        <div>
            {isShow && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}
            <button
                onClick={() => {
                    setIsShow(!isShow);
                }}
            >
                Hapus
            </button>
        </div>
    );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
