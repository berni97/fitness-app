import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Segment } from 'semantic-ui-react';
import DataFormular from './DataFormular';
import SportSelection from './SportSelection';

function FitnessApp() {
  const [selectedSport, setSelectedSport] = React.useState('');
  const [value, setValue] = React.useState(-1);

  const handleSubmit = () => {
    // Push the data to the server :)

    // eslint-disable-next-line no-console
    console.log(
      `Absolved ${
        value +
        (selectedSport === 'mountaineering' || selectedSport === 'skitour'
          ? 'hm'
          : 'km')
      } -> ${selectedSport}`
    );
    setValue(-1);
  };
  return (
    <>
      <Grid textAlign="center">
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
              <Grid.Column>
                <Segment>
                  <Grid columns={2} relaxed="very">
                    <Grid.Row>
                      <Grid.Column>
                        <DataFormular
                          value={value}
                          setValue={setValue}
                          selectedSport={selectedSport}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Button
                          disabled={
                            selectedSport === '' ||
                            Number.isNaN(value) ||
                            value <= 0
                          }
                          onClick={handleSubmit}
                        >
                          Jetzt speichern!
                        </Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Row>

        <Grid.Row>
          <Container>
            <Grid columns={3}>
              <Grid.Column />
              <Grid.Column />

              <Grid.Column textAlign="right">
                {`Du bist unter dem Namen ${localStorage.getItem(
                  'user'
                )} angemeldet. `}
                <Link to="/">
                  <Button>Ausloggen</Button>
                </Link>
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default FitnessApp;
