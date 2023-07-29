import { formatDistanceToNow } from "date-fns";
import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TodoList from "../TodoList/TodoList";
import "./App.css";
import { Component } from "react";

export default class App extends Component {
  state = {
    todoArray: [
      {
        id: 1,
        description: "completed task",
        status: "completed",
        date: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true }),
      },
      {
        id: 2,
        description: "completed none",
        status: "view",
        date: formatDistanceToNow(new Date(2023, 6, 2), { addSuffix: true }),
      },
      {
        id: 3,
        description: "completed none",
        status: "editing",
      },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoArray }) => {
      const idx = todoArray.findIndex((el) => el.id === id);
      return {
        todoArray: todoArray.toSpliced(idx, 1),
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TodoList items={this.state.todoArray} onDeleted={this.deleteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}
