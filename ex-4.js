const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodos(todos) {
  return todos.filter(todo => todo.completed === true);
}

const completedTodos = getCompletedTodos(todos);

console.log(completedTodos);
