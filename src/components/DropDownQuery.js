import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  formControl: {
    marginBottom: 20,
  },
  button: {
    width: 200,
  },
});

const DropdownComponent = (props) => {
  const [selectedRoastOption, setSelectedRoastOption] = useState('');
  const [selectedFarmOption, setSelectedFarmOption] = useState('');
  const [selectedVendorOption, setSelectedVendorOption] = useState('');
  const classes = useStyles();

  const handleRoastOptionChange = (event) => {
    setSelectedRoastOption(event.target.value);
  };

  const handleFarmOptionChange = (event) => {
    setSelectedFarmOption(event.target.value);
  };

  const handleVendorOptionChange = (event) => {
    setSelectedVendorOption(event.target.value);
  };

  const handleSubmit = () => {
    // Call your function with the selected option as an argument
    props.onSubmit(selectedRoastOption,selectedFarmOption,selectedVendorOption);
  };

  return (
    <div className={classes.root}>
      <div className={classes.formControl}>
        <Select 
          style={{ marginRight: '1rem' }}
          value={selectedRoastOption}
          onChange={handleRoastOptionChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select a roastery' }}
        >
          <MenuItem value="">Select an option</MenuItem>
          {props.roasteryoptions.map((item,index) => (
            <MenuItem value={item[0]} >{item[1]}</MenuItem>
          ))}
        </Select>

        <Select
          style={{ marginRight: '1rem' }}
          value={selectedFarmOption}
          onChange={handleFarmOptionChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select a farm' }}
        >
          <MenuItem value="">Select an option</MenuItem>
          {props.farmoptions.map((item,index) => (
            <MenuItem value={item[0]} >{item[1]}</MenuItem>
          ))}
        </Select>

        <Select
          value={selectedVendorOption}
          onChange={handleVendorOptionChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select a vendor' }}
        >
          <MenuItem value="">Select an option</MenuItem>
          {props.vendoroptions.map((item,index) => (
            <MenuItem value={item[0]} >{item[1]}</MenuItem>
          ))}
        </Select>

      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default DropdownComponent;