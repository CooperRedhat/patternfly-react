import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataListCheck } from '../DataListCheck';

it('does not throw a "A component is changing an uncontrolled input of type checkbox to be controlled" error when changed if using isChecked', () => {
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  const ControlledDataListCheck = () => {
    const [checked, setChecked] = React.useState(false);

    return <DataListCheck isChecked={checked} onChange={() => setChecked(!checked)} aria-labelledby={'string'} />;
  };

  render(<ControlledDataListCheck />);

  userEvent.click(screen.getByRole('checkbox'));

  expect(consoleSpy).not.toHaveBeenCalled();
});
