import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todos } from "./types/todos";
import Message from "./components/Message";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addMessage = () => {
    if (todo) {
      setTodos([...todos, { message: todo, id: todos.length + 1 }]);
      setTodo("");
    }
  };

  const deleteMessage = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <>
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
      <Message deleteMessage={deleteMessage} todos={todos} />
    </>
  );
};

export default App;
