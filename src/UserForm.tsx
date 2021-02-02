/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function UserForm(props: any) {
  const { handleSubmit } = props;
  const [current, setCurrent] = React.useState('');
  const [calledSubmit, setCalledSubmit] = React.useState(false);

  const onSubmit = () => {
    handleSubmit(current);
    setCalledSubmit(true);
  };
  return (
    <Form>
      <Form.Field>
        <label htmlFor="name">Dein Name:</label>
        <input
          type="text"
          placeholder="Bitte gib hier deinen Namen ein.."
          value={current}
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
          id="name"
        />
      </Form.Field>
      <Link to="/fitness-app">
        <Button onClick={onSubmit} type="submit" disabled={current === ''}>
          Bestätigen
        </Button>
      </Link>
    </Form>
  );
}

export default UserForm;
