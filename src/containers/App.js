import React, { useState, useEffect } from "react";
import { CardList } from "../components/CardList";
//import { robots } from "../robots";
import { SearchBox } from "../components/SearchBox";
import { Scroll } from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setAccounts(users));
  }, []);

  const onSearchChange = (event) => {
    // console.log(event.target.value);
    setSearchfield(event.target.value);
  };
  const filteredRobots = accounts.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(searchfield.toLocaleLowerCase());
  });
  return !accounts.length ? (
    <h1 className="f2 tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};
export default App;
