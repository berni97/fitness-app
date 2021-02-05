import React from 'react';
import { Input } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DataFormular(props: any) {
  const { value, setValue, selectedSport } = props;
  const [warning, setWarning] = React.useState(false);

  return (
    <div>
      <Input
        type="number"
        value={value}
        onChange={(e) => {
          if (e.target.value.startsWith('-')) {
            setWarning(true);
            setValue(e.target.value);
          } else {
            setWarning(false);
            setValue(e.target.value);
          }
        }}
        label={{
          pointing: 'left',
          content:
            selectedSport === 'skitour' || selectedSport === 'mountaineering'
              ? 'hm'
              : 'km',
        }}
        labelPosition="right"
        placeholder="Anzahl km..."
      />
      {warning && (
        <div
          style={{
            fontSize: '12pt',
            color: 'white',
            background: 'black',
            borderRadius: '5px',
            marginTop: '10px',
            height: '1%',
            textAlign: 'center',
            lineHeight: '1.5',
          }}
        >
          <span>
            Rückwärts laufen macht keinen Sinn{' '}
            <span role="img" aria-labelledby="angry">
              😠
            </span>
          </span>
        </div>
      )}
    </div>
  );
}

export default DataFormular;
