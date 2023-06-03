import React, { useState } from 'react';
import { TextField, Button, Box, Rating, TableCell, TableRow, TableHead, Table } from '@mui/material';
import { Tab } from '@mui/base';

const RatingForm = ( props ) => {
  const { userid, coffeeid } = props;

  const currentDate = new Date();
  const year = currentDate.getFullYear(); // Current year (e.g., 2023)
  const month = currentDate.getMonth() + 1; // Current month (values range from 0 to 11, so add 1)
  const day = currentDate.getDate(); // Current day of the month (e.g., 31)
  const formattedDate = `${year}-${month}-${day}`;
  const [ratingData, setRatingData] = useState({
    userid: '',
    coffeeid: '',
    rating: 0,
    flavorProfile: '',
    sweetness: 0,
    body: 0,
    acidity: 0,
    bitterness: 0,
    date: formattedDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRatingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (name, value) => {
    setRatingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log(ratingData); // Example: Log the rating data to the console
    // Reset the form
    setRatingData({
      userid: '',
      coffeeid: '',
      rating: 0,
      flavorProfile: '',
      sweetness: 0,
      body: 0,
      acidity: 0,
      bitterness: 0,
      date: '',
    });
  };

  return (
    <Box maxWidth={400} mx="auto">
      <form onSubmit={handleSubmit}>
        <TableCell>
            User ID:
        <TextField
          name="userid"
          label="User ID"
          value={ratingData.userid}
          onChange={handleChange}
          fullWidth
          required
        />
        </TableCell>
        <TextField
          name="coffeeid"
          label="Coffee ID"
          value={ratingData.coffeeid}
          onChange={handleChange}
          fullWidth
          required
        />
        <TableRow>
        <TableCell>
        Overall score:
        </TableCell>
        <TableCell>
        <Rating
          name="rating"
          value={ratingData.rating}
          onChange={(event, newValue) => handleRatingChange('rating', newValue)}
          size="large"
          required
        />
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
        Sweetness:
        </TableCell>
        <TableCell>
        <Rating
          name="sweetness"
          value={ratingData.sweetness}
          onChange={(event, newValue) => handleRatingChange('sweetness', newValue)}
          size="large"
          required
        />
        </TableCell>
        </TableRow>
                <TableRow>
        <TableCell>
        Body:
        </TableCell>
        <TableCell>
        <Rating
          name="body"
          value={ratingData.body}
          onChange={(event, newValue) => handleRatingChange('body', newValue)}
          size="large"
          required
        />
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
        Acidity
        </TableCell>
        <TableCell>
        <Rating
          name="acidity"
          value={ratingData.acidity}
          onChange={(event, newValue) => handleRatingChange('acidity', newValue)}
          size="large"
          required
        />
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
        Bitterness:
        </TableCell>
        <TableCell>
        <Rating
          name="bitterness"
          value={ratingData.bitterness}
          onChange={(event, newValue) => handleRatingChange('bitterness', newValue)}
          size="large"
          required
        />
        </TableCell>
        </TableRow>
        <TextField
          name="flavorProfile"
          label="Flavor Profile"
          value={ratingData.flavorProfile}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          name="date"
          label="Date of Rating"
          value={ratingData.date}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Rating
        </Button>
      </form>
    </Box>
  );
};

export default RatingForm;