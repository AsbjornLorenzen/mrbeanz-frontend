import React from "react";

const TableComponent = ({ data }) => {
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

  return (
    <div>
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
          <tr>
            <td>Average Rating</td>
            <td>{averageRating}</td>
          </tr>
          <tr>
            <td>Average Sweetness</td>
            <td>{averageSweetness}</td>
          </tr>
          <tr>
            <td>Average Body</td>
            <td>{averageBody}</td>
          </tr>
          <tr>
            <td>Average Acidity</td>
            <td>{averageAcidity}</td>
          </tr>
          <tr>
            <td>Average Bitterness</td>
            <td>{averageBitterness}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;