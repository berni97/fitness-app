import React from 'react';
import { Input } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
function KilometerFormular(props: any) {
  const { onEnter } = props;
  const handleEnter = (km: string) => {
    const kmNumber = parseInt(km, 10);
    onEnter(kmNumber);
  };

  return (
    <Input
      onChange={(e) => handleEnter(e.target.value)}
      label={{ basic: true, content: 'km' }}
      labelPosition="right"
      placeholder="Enter km..."
    />
  );
}

export default KilometerFormular;
