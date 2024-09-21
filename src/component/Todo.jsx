import { useState } from "react";
import Form from "./form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  // Spread Operator ...todos
  /*What ...todos does is that even before setting this(setTodos) to new Array,
    first it will take the items currently present in the todos which means the prev items,
    then after layout the prev items here, then it will take the new item which is todo and then
    it will set the entire todo array to the old items(todos) + the new item that we have added(Todo)*/
  // console.log(todos);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}

/*For submitting form, we are facing 2 issues:
We want to prevent the refresh of the page because when the pages is refreshed
data is lost

*/
