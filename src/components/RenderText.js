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
import { fetchBeanData } from '../utils/api';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: 500,
    margin: '0 auto',
  },
});

const TextComponent = (props) => {
  const { coffeeData } = props;
  const classes = useStyles();

  return (
    <Box mb={3} marginTop={3}>
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3} style={{ borderBottom: '3px solid black', borderTop: '3px solid black'}}>
            Some coffee
          </TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
          {Object.entries(coffeeData).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default TextComponent;