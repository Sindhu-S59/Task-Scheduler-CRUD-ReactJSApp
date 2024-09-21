import Todo from "./component/todo";
import Header from "./component/Header";
import "./App.css";
import Form from "./component/form";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
