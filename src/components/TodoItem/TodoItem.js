import { Component } from "react";
import "./TodoItem.css";

export default class TodoItem extends Component {
  state = {
    status: this.props.items.status,
    toggle: this.props.items.status === "completed" ? true : false,
  };

  editItemStatus = (e) => {
    if (e.target.className === "toggle") {
      console.log(this.state);
      this.setState({
        status: !this.state.toggle ? "completed" : "view",
        toggle: !this.state.toggle,
      });
    } else {
      console.log("editing");
      this.setState({
        toggle: false,
        status: "editing",
      });
    }
  };

  render() {
    const { items, onDeleted } = this.props;
    const { status, toggle } = this.state;

    return (
      <li className={status} key={items.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={toggle}
            onClick={this.editItemStatus}
          />
          <label>
            <span className="description">{items.description}</span>
            <span className="created">{items.date}</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={this.editItemStatus}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {status === "editing" && (
          <input className="edit" type="text" value={items.description} />
        )}
      </li>
    );
  }
}
