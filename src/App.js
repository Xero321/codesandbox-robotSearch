import React, { Component } from "react";
import { render } from "react-dom";
import { CardList } from "./components/card-list/card-list";
import { Search } from "./components/search";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ""
    };
  }

  onChangedSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((el) => {
      return (
        el.name.toLowerCase().includes(searchField) ||
        el.email.toLowerCase().includes(searchField) ||
        el.phone.toLowerCase().includes(searchField)
      );
    });

    return (
      <div className="App">
        <h1>Роботуудын хайлт: </h1>
        <Search onSearch={this.onChangedSearch} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
