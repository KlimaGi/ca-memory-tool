import React, { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

// todo: instead of label text add moon icon (& sun)
const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log('checked', { checked });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={(
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="secondary"
          />
        )}
      />
    </Box>
  );
};
export default ThemeSwitch;
