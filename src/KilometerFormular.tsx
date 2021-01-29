import React from 'react';
import { Input } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
function DataFormular(props: any) {
  const { onEnter, selectedSport } = props;
  const handleEnter = (km: string) => {
    const kmNumber = parseInt(km, 10);
    onEnter(kmNumber);
  };

  return (
    <Input
      onChange={(e) => handleEnter(e.target.value)}
      label={{
        pointing: 'left',
        content:
          selectedSport === 'skitour' || selectedSport === 'mountaineering'
            ? 'hm'
            : 'km',
      }}
      labelPosition="right"
      placeholder="Enter km..."
    />
  );
}

export default DataFormular;
