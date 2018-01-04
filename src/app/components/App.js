import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from '../containers/search_bar';
import TableList from '../containers/table_list';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <TableList />
      </div>
    );
  }
}

export default App;

