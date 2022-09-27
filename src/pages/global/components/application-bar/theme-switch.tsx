import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { Brightness4 } from '@mui/icons-material';

// todo: instead of label text add moon icon (& sun)
const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log('checked', { checked });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (

    <FormControlLabel
      label={<Brightness4 />}
      control={(
        <Switch
          checked={checked}
          onChange={handleChange}
          color="default"
        />
      )}
    />

  );
};
export default ThemeSwitch;
