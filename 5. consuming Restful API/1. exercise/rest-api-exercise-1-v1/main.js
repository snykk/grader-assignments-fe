import { task1, task2, task3, task4 } from "./tasks.js";
import nodeFetch from "node-fetch";

global.fetch = nodeFetch;

const task_1_result = async () => {
  try {
    const response = await task1();
    const response_text = await response.text();

    console.log(response_text);
  } catch (e) {
    console.log("Task 1 error");
    console.log(e);
  }
};

const task_2_result = async () => {
  try {
    const response = await task2();

    console.log("Task 2 secret code result: " + response);
  } catch (e) {
    console.log("Task 2 error");
    console.log(e);
  }
};

const task_3_result = async () => {
  try {
    const response = await task3();
    const response_text = await response.text();

    console.log(response_text);
  } catch (e) {
    console.log("Task 3 error");
    console.log(e);
  }
};

const task_4_result = async () => {
  try {
    const response = await task4();
    const response_text = await response.text();

    console.log(response_text);
  } catch (e) {
    console.log("Task 4 error");
    console.log(e);
  }
};

task_1_result();
task_2_result();
task_3_result();
task_4_result();
