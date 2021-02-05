import React from 'react';

import { Header, Grid } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import FitnessApp from './FitnessApp';
import Login from './Login';

function Home() {
  return (
    <div>
      <Grid centered relaxed="very">
        <Grid.Row />
        <Grid.Row>
          <Grid.Column width={16} textAlign="center">
            <Header as="h1">{'<FitnessApp />'}</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Switch>
              <Route exact path="/fitness-app" component={FitnessApp} />
              <Route path="/" component={Login} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Home;
