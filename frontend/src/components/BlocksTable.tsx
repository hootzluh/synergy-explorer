import React from "react";
import "../styles/BlocksTable.css";

const BlocksTable: React.FC = () => {
  return (
    <div className="table-container">
      <h2>Latest Blocks</h2>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Transactions</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#256,789</td>
            <td>345</td>
            <td>2 min ago</td>
          </tr>
          <tr>
            <td>#256,788</td>
            <td>289</td>
            <td>5 min ago</td>
          </tr>
          <tr>
            <td>#256,787</td>
            <td>401</td>
            <td>7 min ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BlocksTable;
