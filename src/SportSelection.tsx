import React from 'react';
import { Button } from 'semantic-ui-react';

function SportSelection(props: any) {
  const { onSelected } = props;
  const initialState = {
    run: false,
    cycling: false,
    mountaineering: false,
    nordic: false,
    skitour: false,
  };
  const [selected, setSelected] = React.useState(initialState);

  const handleSelection = (chosenSport: string) => {
    console.log(`${chosenSport} selected :)`);
    onSelected(chosenSport);
    setSelected({ ...initialState, [chosenSport]: true });
  };
  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <Button.Group>
        <Button
          onClick={() => handleSelection('run')}
          color={selected.run ? 'blue' : 'grey'}
        >
          Laufen
        </Button>
        <Button
          onClick={() => handleSelection('cycling')}
          color={selected.cycling ? 'blue' : 'grey'}
        >
          Radfahren
        </Button>
        <Button
          onClick={() => handleSelection('mountaineering')}
          color={selected.mountaineering ? 'blue' : 'grey'}
        >
          Bergsteigen
        </Button>
        <Button
          onClick={() => handleSelection('nordic')}
          color={selected.nordic ? 'blue' : 'grey'}
        >
          Langlaufen
        </Button>
        <Button
          onClick={() => handleSelection('skitour')}
          color={selected.skitour ? 'blue' : 'grey'}
        >
          Skitour
        </Button>
      </Button.Group>
    </div>
  );
}

export default SportSelection;
