import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Header,
  Grid,
  Button,
  Container,
  Divider,
  Segment,
} from 'semantic-ui-react';
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
      <Grid centered>
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
          <Segment textAlign="center">
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <KilometerFormular onEnter={handleEnterKM} />
              </Grid.Column>
              <Grid.Column>
                <Button>Jetzt speichern!</Button>
              </Grid.Column>
            </Grid>
          </Segment>
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
