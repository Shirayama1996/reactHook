import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { Countdown, NewCountDown } from "./views/Countdown";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import AddNewBlog from "./views/AddNewBlog";
import NotFound from "./views/NotFound";

function App() {
  let [newName, setNewName] = useState("");
  let [todo, setTodo] = useState([
    { id: 1, title: "watching TV", type: "Shira" },
    { id: 2, title: "killing people", type: "Shira" },
    { id: 3, title: "teaching students", type: "Sushi" },
    { id: 4, title: "swmming", type: "Sushi" },
  ]);

  const handleEventClick = () => {
    if (!newName) {
      alert("Nhập đi ba");
      return;
    }
    let todoChild = { id: Math.floor(Math.random() * 1001), title: newName };
    setTodo([...todo, todoChild]);
    setNewName("");
  };

  const handleOnChange = (event) => {
    setNewName(event.target.value);
  };

  const deleteTodo = (obj) => {
    setTodo(obj);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World - I Love Hook</h1>
          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer">
              <Countdown />
              ------
              <NewCountDown />
            </Route>
            <Route path="/todo">
              <input
                type="text"
                value={newName}
                onChange={(event) => handleOnChange(event)}
              ></input>
              <button type="button" onClick={handleEventClick}>
                Click Me
              </button>
              <Todo todo={todo} title={"All todo"} deleteTodo={deleteTodo} />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/add-new-blog">
              <AddNewBlog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
