import { Component } from "react";

import AppInfo from "../components/app-info/app-info.js";
import SearchPanel from "../components/search-panel/search-panel";
import AppFilter from "../components/app-filter/app-filter";
import EmployersList from "../components/employers-list/employers-list";
import EmployersAddFrom from "../components/employers-add-form/employers-add-form";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "John C.",
          salary: 800,
          increase: true,
          favourite: true,
        },
        {
          id: 2,
          name: "Nick S.",
          salary: 3000,
          increase: false,
          favourite: false,
        },
        {
          id: 3,
          name: "Mike C.",
          salary: 5000,
          increase: false,
          favourite: true,
        },
        {
          id: 4,
          name: "Alex C.",
          salary: 10000,
          increase: false,
          favourite: true,
        },
      ],

      term: "",
      filter: "all", // all, increase, salary
    };
  }

  // adding the worker
  addItem = (name, salary) => {
    this.setState(({ data }) => ({
      data: [...data, { name, salary, increase: false, id: data.length + 1 }],
    }));
  };

  // toggling the property (increase, favourite)
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  // get the total amount of workers
  getWorkersTotal = () => {
    return this.state.data.length;
  };

  // get the amount of workers getting increase
  getWorkersGettingIncrease = () => {
    return this.state.data.filter((item) => item.increase).length;
  };

  // deleting the worker
  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  // filtering the data
  filterData = (data, filter) => {
    switch (filter) {
      case "increase":
        return data.filter((item) => item.increase);
      case "salary":
        return data.filter((item) => item.salary > 1000);
      default:
        return data;
    }
  };

  // setting filter state
  onFilterReselect = (filter) => {
    this.setState({ filter });
  };

  // getting visible data
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  // search the worker
  onSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData =
      this.searchEmp(this.filterData(data, filter), term) ??
      "Unfortunately, there are no workers with such name";

    return (
      <div className="app">
        {/* <WhoIam name="Alex" /> */}
        <AppInfo
          amount={this.getWorkersTotal()}
          increase={this.getWorkersGettingIncrease()}
        />
        <div className="search-panel">
          <SearchPanel onSearch={this.onSearch} />
          <AppFilter
            onFilterReselect={this.onFilterReselect}
            filter={this.state.filter}
          />
        </div>
        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddFrom onAdd={this.addItem} />
        {/* <EmployersAddFrom /> */}
      </div>
    );
  }
}
