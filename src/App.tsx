import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Grid, Button } from 'semantic-ui-react';
import SportSelection from './SportSelection';
import KilometerFormular from './KilometerFormular';

const Home = () => {
  const [, setSelectedSport] = React.useState('');

  const handleEnterKM = (km: number) => {
    // eslint-disable-next-line no-console
    console.log('You entered: ', km);
  };
  return (
    <div>
      <Grid>
        <Grid.Row />
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={10} textAlign="center">
            <Header as="h1">{'<FitnessApp/>'}</Header>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3} />

          <Grid.Column width={10} textAlign="center">
            <SportSelection
              onSelected={(chosenSport: string) => {
                setSelectedSport(chosenSport);
              }}
            />
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={5} />

          <Grid.Column textAlign="left" width={3}>
            <KilometerFormular onEnter={handleEnterKM} />
          </Grid.Column>
          <Grid.Column textAlign="right" width={3}>
            <Button>Jetzt speichern!</Button>
          </Grid.Column>

          <Grid.Column width={5} />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
