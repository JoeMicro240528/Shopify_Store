import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Tabscontent() {
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus

      >
        <Tab sx={{ textTransform: "none", fontSize: "12px" }} label="Description" />
        <Tab sx={{ textTransform: "none", fontSize: "12px" }} label="Reviews (121)" />
        <Tab sx={{ textTransform: "none", fontSize: "12px" }} label="Q&A (14)" />
      </Tabs>
    </Box>
  );
}
