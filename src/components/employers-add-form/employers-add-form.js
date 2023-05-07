// import "./employers-add-form.css";
import "./_employers-add-form.scss";
import { Component } from "react";

export default class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, salary } = this.state;
    const { onAdd } = this.props;

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form
          className="add-form d-flex"
          onSubmit={(e) => {
            e.preventDefault();
            if (name && salary > 200) {
              onAdd(name, salary);
            }

            this.setState({
              name: "",
              salary: "",
            });
          }}
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="The workers name?"
            name="name"
            onChange={this.onValueChange}
            value={name}
            required
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $"
            name="salary"
            onChange={this.onValueChange}
            value={salary}
            required
          />

          <button type="submit" className="btn btn-outline-light">
            Add the worker
          </button>
        </form>
      </div>
    );
  }
}
