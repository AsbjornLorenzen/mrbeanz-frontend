import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import TextComponent from './RenderText';
import { fetchBeanData } from '../utils/api';

const SearchAndTextBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [textValue, setTextValue] = useState('');
  const [coffeeDataArray, setCoffeeDataArray] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const getCoffeeData = async () => {
    try {
        const res = await fetchBeanData(searchTerm);
        setCoffeeDataArray(res);
    } catch (err) {
        console.log('Error in TextComponent: ',err);
    }
}

  const handleSearch = () => {
    // Perform search logic using the searchTerm
    console.log('Searching for:', searchTerm);
    getCoffeeData();
  };

  return (
    <Box>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      {coffeeDataArray && coffeeDataArray.map((item, index) => (
        <TextComponent coffeeData={coffeeDataArray[index]} />
      ))}
    </Box>
  );
};

export default SearchAndTextBox;