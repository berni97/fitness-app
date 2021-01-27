import React from 'react';
import './App.global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Segment, Input, Dropdown } from 'semantic-ui-react';

const KilometerFormular = () => {
  const options = [
    { key: 'run', text: 'Laufen', value: 'run' },
    { key: 'bike', text: 'Radfahren', value: 'bike' },
    { key: 'climb', text: 'Bergsteigen', value: 'climb' },
  ];
  return (
    <Input
      action={
        <Dropdown button basic floating options={options} defaultValue="run" />
      }
      icon="stopwatch"
      iconPosition="left"
      placeholder="Anzahl km"
    />
  );
};
const Home = () => {
  return (
    <div>
      <Header as="h1">Willkommen!</Header>
      <Segment>
        <KilometerFormular />
      </Segment>
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
