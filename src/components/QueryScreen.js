import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import TextComponent from './RenderText';
import { fetchBeanData } from '../utils/api';
import DropdownComponent from './DropDownQuery'
import DisplayRatingComponent from './DisplayRatingComponent'

const SearchAndTextBox = (props) => {
  const { setCurrentCoffee, navigateTo } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [textValue, setTextValue] = useState('');
  const [coffeeData, setCoffeeData] = useState('')
  const [ratingData, setRatingData] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const getCoffeeData = async () => {
    try {
        const res = await fetchBeanData(searchTerm);
        const beanAndRatings = JSON.parse(res)
        setCoffeeData(beanAndRatings[0]);
        setRatingData(beanAndRatings[1])
    } catch (err) {
        console.log('Error in TextComponent: ',err);
        setRatingData({})
    }
  }

  const handleSearch = () => {
    // Perform search logic using the searchTerm
    getCoffeeData();
  };

  return (
    <Box>
      <div>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        variant="outlined"
        margin="normal"
      />
      </div>
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      {coffeeData &&
      <div>
        <TextComponent coffeeData={coffeeData} setCurrentCoffee={setCurrentCoffee} rateable={true} navigateTo={navigateTo}/>
      </div>
      }
      {ratingData &&
      <div>
        <h2>Average of ratings: </h2>
        <DisplayRatingComponent data={Array(ratingData)} />
        <h2>All ratings: </h2>
        <TextComponent coffeeData={ratingData} setCurrentCoffee={setCurrentCoffee} rateable={false} navigateTo={navigateTo}/>
        </div>
      }
    </Box>
  );
};

export default SearchAndTextBox;