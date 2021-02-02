import React from 'react';
import { Input } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DataFormular(props: any) {
  const { value, setValue, selectedSport } = props;

  return (
    <Input
      type="number"
      value={value === -1 ? -1 : value}
      onChange={(e) => setValue(e.target.value)}
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
  );
}

export default DataFormular;
