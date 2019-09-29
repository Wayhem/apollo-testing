import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Router, Route, Switch } from "react-router";
import { history } from "./history";
import "./styles.css";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <div className="container">
          <Switch>
            <Route path="/" exact component={SongList} />
            <Route path="/songs/new" exact component={SongCreate} />
            <Route path="/songs/:id" component={SongDetail} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

render(<Root />, document.querySelector("#root"));
