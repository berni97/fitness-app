import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Grid, Button, Container, Segment } from 'semantic-ui-react';
import SportSelection from './SportSelection';
import DataFormular from './KilometerFormular';

const Home = () => {
  const [selectedSport, setSelectedSport] = React.useState('');
  const [value, setValue] = React.useState(0);

  const handleEnterKM = (km: number) => {
    setValue(km);
    // eslint-disable-next-line no-console
    console.log('You entered: ', km);
  };

  const handleSubmit = () => {
    console.log(
      `Absolved ${
        value +
        (selectedSport === 'mountaineering' || selectedSport === 'skitour'
          ? 'hm'
          : 'km')
      } -> ${selectedSport}`
    );
  };
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
          <Container textAlign="center">
            <Grid columns={1}>
              <Grid.Column>
                <SportSelection
                  onSelected={(chosenSport: string) => {
                    setSelectedSport(chosenSport);
                  }}
                />
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Row>

        <Grid.Row>
          <Segment>
            <Grid columns={2} relaxed="very">
              <Grid.Row>
                <Grid.Column>
                  <DataFormular
                    onEnter={handleEnterKM}
                    selectedSport={selectedSport}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Button
                    disabled={selectedSport === ''}
                    onClick={handleSubmit}
                  >
                    Jetzt speichern!
                  </Button>
                </Grid.Column>
              </Grid.Row>
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
