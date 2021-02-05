import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Segment } from 'semantic-ui-react';
import DataFormular from './DataFormular';
import SportSelection from './SportSelection';

function FitnessApp() {
  const [selectedSport, setSelectedSport] = React.useState('');
  const [value, setValue] = React.useState(0);
  const [calledHandleSubmit, setCalledHandleSubmit] = React.useState(false);

  async function foo() {
    setCalledHandleSubmit(true);
    setTimeout(() => setCalledHandleSubmit(false), 3000);
  }

  const handleSubmit = () => {
    try {
      foo();
    } catch (err) {
      setCalledHandleSubmit(false);
    }
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
  };
  return (
    <>
      <Grid>
        <Grid.Row>
          <Container style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid centered columns={1} style={{ maxWidth: 600 }}>
              <Grid.Column>
                <SportSelection
                  onSelected={(chosenSport: string) => {
                    setSelectedSport(chosenSport);
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Segment style={{ width: '100%', height: '145px' }}>
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
                        <div style={{ textAlign: 'center' }}>
                          {calledHandleSubmit ? (
                            <div
                              style={{
                                marginLeft: '3%',
                                fontSize: '30pt',
                              }}
                            >
                              <span role="img" aria-labelledby="emoji">
                                🥳
                              </span>
                            </div>
                          ) : (
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
                          )}
                          {selectedSport === '' && (
                            <div
                              style={{
                                marginTop: '10px',
                                color: 'white',
                                borderRadius: '5px',
                                margin: '10px',
                              }}
                            >
                              <span>Bitte wähle eine Sportart ;)</span>
                            </div>
                          )}
                        </div>
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
                <div style={{ textAlign: 'center' }}>
                  {`Dein Name: ${localStorage.getItem('user')}`}
                  <div style={{ marginTop: '10px' }}>
                    <Link to="/">
                      <Button>Benutzer wechseln</Button>
                    </Link>
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default FitnessApp;
