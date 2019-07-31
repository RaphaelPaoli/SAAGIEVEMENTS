import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import HomeAchievement from './pages/HomeAchievement';
import NewAchievement from './pages/NewAchievement';

const App = ({ client }) => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={HomeAchievement} />
        <Route exact path="/new-achievement" component={NewAchievement} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
