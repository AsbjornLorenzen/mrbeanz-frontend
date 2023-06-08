import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const useStyles = makeStyles({
  tableContainer: {
    margin: "auto",
    marginBottom: "1.5rem",
    marginTop: "1.5rem",
    maxWidth: "32rem"
  },
  star: {
    color: "gold",
  },
});

const TableComponent = ({ data }) => {
  const classes = useStyles();

  // Compute average ratings
  const ratings = data.map((item) => item.Rating);
  const averageRating = ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;

  // Compute average sweetness
  const sweetness = data.map((item) => item.Sweetness);
  const averageSweetness = sweetness.reduce((acc, curr) => acc + curr, 0) / sweetness.length;

  // Compute average body
  const body = data.map((item) => item.Body);
  const averageBody = body.reduce((acc, curr) => acc + curr, 0) / body.length;

  // Compute average acidity
  const acidity = data.map((item) => item.Acidity);
  const averageAcidity = acidity.reduce((acc, curr) => acc + curr, 0) / acidity.length;

  // Compute average bitterness
  const bitterness = data.map((item) => item.Bitterness);
  const averageBitterness = bitterness.reduce((acc, curr) => acc + curr, 0) / bitterness.length;

  const renderStars = (value) => {
    const stars = [];
    for (let i = 0; i < value; i++) {
      stars.push(<span key={i} className={classes.star}>★</span>);
    }
    return stars;
  };

  return (
    <Box mb={3} marginTop={3}>
      <TableContainer className={classes.tableContainer} component={Paper} style={{ border: '1px solid black' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell>Average value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Average Rating</TableCell>
              <TableCell>{typeof averageRating === "number" ? renderStars(averageRating) : averageRating}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Sweetness</TableCell>
              <TableCell>{typeof averageSweetness === "number" ? renderStars(averageSweetness) : averageSweetness}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Body</TableCell>
              <TableCell>{typeof averageBody === "number" ? renderStars(averageBody) : averageBody}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Acidity</TableCell>
              <TableCell>{typeof averageAcidity === "number" ? renderStars(averageAcidity) : averageAcidity}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Bitterness</TableCell>
              <TableCell>{typeof averageBitterness === "number" ? renderStars(averageBitterness) : averageBitterness}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;