function task1() {
  return fetch("http://localhost:3000");
}

async function task2() {
  const response = await fetch("http://localhost:3000/task2", {
    method: "PATCH",
  });

  return response; 
}

function task3() {
  return fetch("http://localhost:3000/task3?user_id=3&role=admin", {
    method: "POST",
  });
}


function task4() {
  return fetch("http://localhost:3000/task4", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "admin",
      password: "password",
    }),
  });
}


export { task1, task2, task3, task4 };
