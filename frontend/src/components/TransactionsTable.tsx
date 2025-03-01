import React from "react";
import "../styles/TransactionsTable.css";

const TransactionsTable: React.FC = () => {
  return (
      <div className="table-container">
          <h2>Latest Transactions</h2>
          <table>
              <thead>
                  <tr>
                      <th>Txn Hash</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Amount</th>
                      <th>Time</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>0xabc123...</td>
                      <td>0x12345...</td>
                      <td>0x67890...</td>
                      <td>1.2 ETH</td>
                      <td>1 min ago</td>
                  </tr>
                  <tr>
                      <td>0xdef456...</td>
                      <td>0x54321...</td>
                      <td>0x09876...</td>
                      <td>3.4 ETH</td>
                      <td>3 min ago</td>
                  </tr>
                  <tr>
                      <td>0xghi789...</td>
                      <td>0x67890...</td>
                      <td>0x12345...</td>
                      <td>0.5 ETH</td>
                      <td>5 min ago</td>
                  </tr>
                  <tr>
                    <a href="#" >View More...</a>
                  </tr>
              </tbody>
          </table>
      </div>
  );
};

export default TransactionsTable;
