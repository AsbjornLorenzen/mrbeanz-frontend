import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { fetchBeanData } from '../utils/api';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: 500,
    margin: '0 auto',
  },
});

const TextComponent = (props) => {
  const { coffeeData, setCurrentCoffee, rateable, navigateTo } = props;
  const classes = useStyles();
  const handleRateClick = () => {
    setCurrentCoffee(coffeeData.CoffeeID)
  }

  return (
    <Box mb={3} marginTop={3}>
    <TableContainer className={classes.tableContainer} component={Paper} style={{ border: '1px solid black' }}>
      <Table >
      <TableHead>
      </TableHead>
        <TableBody>
          {Object.entries(coffeeData).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{value.toString()}</TableCell>
            </TableRow>
          ))}

        {rateable &&
        <TableRow>
          <TableCell align="center" colSpan={2}>
          <Button variant="contained" onClick={handleRateClick}>
                Rate this coffee
          </Button>
          </TableCell>
        </TableRow>
        }
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default TextComponent;