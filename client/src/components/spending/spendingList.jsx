import React from 'react';
import spendingForm from './spendingForm.jsx';
import spendingListEntry from './spendingListEntry.jsx';

var SpendingList = (props) => (
  <div className="spending">
    <h2>Transactions</h2>
    <table className="table">
      <thead id="spending-head">
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {props.list.map(owes => <SpendingListEntry entry={owes} />)}
      </tbody>
    </table>
    <SpendingForm submit={props.submit}/>
  </div>
);

SpendingList.prototypes = {
  list: React.PropTypes.array.isRequired
};

module.exports = SpendingList;