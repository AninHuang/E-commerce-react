import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./homepage.component";

const TopicsList = props => {
  console.log(props); // { history: {...}, location: {...}, match: {...} }

  return (
    <div>
      <h1>TopicsList</h1>
    </div>
  );
};

const TopicDetail = props => {
  console.log(props);

  return (
    <div>
      <h1>TopicDetail</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
