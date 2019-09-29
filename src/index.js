import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Router, Route, Switch } from "react-router";
import { history } from "./history";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

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
            <Route path="/songs/new" component={SongCreate} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

render(<Root />, document.querySelector("#root"));
