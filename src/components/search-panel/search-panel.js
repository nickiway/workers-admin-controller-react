import "./search-panel.css";
import { Component } from "react";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onSearch = (term) => {
    this.setState((state) => ({
      term: term,
    }));
    this.props.onSearch(term);
  };

  render() {
    const searchText = "Type here to search";

    return (
      <input
        type="text"
        placeholder={searchText}
        className="form-control search-input"
        onChange={(e) => this.onSearch(e.target.value)}
        value={this.state.term}
      />
    );
  }
}
