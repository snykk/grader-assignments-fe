function task1() {
    return document.getElementById("random-number").innerHTML;
}

function task1_1() {
    return document.getElementById("random-number-class").textContent;
}

function task2() {
    const element = document.getElementById("task-2");
    element.innerHTML = "100";
}

function task3() {
    const button = document.getElementById("task-3-button");
    button.addEventListener("click", function () {
        const element = document.getElementById("task-3");
        element.innerHTML = "100";
    });
}

function task3_1() {
    const button = document.getElementById("task-3-1-button");
    button.addEventListener("click", function () {
        const element = document.getElementById("task-3-1");
        element.innerHTML = "";
    });
}

console.log("Number inside random-number element is: ", task1());
console.log("Number inside random-number-class element is: ", task1_1());
task2();
task3();
task3_1();

if (typeof module !== "undefined") {
    module.exports = { task1, task1_1, task2, task3, task3_1 };
}
