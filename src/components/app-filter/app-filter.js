import "./app-filter.css";
import { Component } from "react";

export default class AppFilter extends Component {
  render() {
    const buttonsData = [
      { name: "all", label: "Show all workers" },
      {
        name: "increase",
        label: "Workers who will be appriciated",
      },
      {
        name: "salary",
        label: "The salary up to 1000",
      },
    ];
    const { onFilterReselect, filter } = this.props;

    const buttons = buttonsData.map(({ name, label }, index) => {
      const active = filter === name;
      const clazz = active ? "btn-light" : "btn-outline-light";

      return (
        <button
          key={index}
          className={`btn ${clazz}`}
          name={name}
          onClick={(e) => {
            onFilterReselect(name);
          }}
        >
          {label}
        </button>
      );
    });

    // loading on the then style to active button
    return (
      <div className="btn-group">
        {/* <button
          className="btn btn-light"
          onClick={(e) => {
            onFilter("all");
            onTogglePropFilter(e);
          }}
        >
          Show all workers
        </button>

        <button
          onClick={(e) => {
            onFilter("increase");
            onTogglePropFilter(e);
          }}
          className="btn btn-outline-light"
        >
          Workers who will be appriciated
        </button>
        <button
          className="btn btn-outline-light"
          onClick={(e) => {
            onFilter("salary");
            onTogglePropFilter(e);
          }}
        >
          The salary up to 1000
        </button> */}
        {buttons}
      </div>
    );
  }
}
