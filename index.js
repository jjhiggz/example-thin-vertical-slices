const $todosContainer = document.querySelector("#todos-container");

const fetchTodos = () =>
  fetch("http://localhost:3000/todos").then((response) => response.json());

const clearElement = (el) => {
  el.innerHTML = "";
};
const createTodoCard = (todo) => {
  // create
  const $card = document.createElement("div");

  // manipulate
  $card.classList.add("todo-card");

  $card.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
    `;

  return $card;
};

window.addEventListener("DOMContentLoaded", async () => {
  const todos = await fetchTodos();
  const todoCards = todos.map(createTodoCard);
  clearElement($todosContainer);
  $todosContainer.append(...todoCards);
});
