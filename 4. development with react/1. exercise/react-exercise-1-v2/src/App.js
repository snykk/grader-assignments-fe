import { Task1, Task1_1, Task2, Task3, Task3_1, Task4 } from "./tasks";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const uuid = uuidv4();
  return (
    <div>
      <div>
        <h1>Task 1</h1>
        <Task1 />
      </div>
      <div>
        <h1>Task 1.1</h1>
        <Task1_1 name={"Kode hari ini: " + uuid}></Task1_1>
      </div>
      <div>
        <h1>Task 2</h1>
        <Task2></Task2>
      </div>
      <div>
        <h1>Task 3</h1>
        <Task3></Task3>
      </div>
      <div>
        <h1>Task 3.1</h1>
        <Task3_1></Task3_1>
      </div>
      <div>
        <h1>Task 4</h1>
        <Task4></Task4>
      </div>
    </div>
  );
};

export default App;
