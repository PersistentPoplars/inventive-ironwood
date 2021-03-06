import React from 'react';
import SpendingForm from './spendingForm.jsx';
import SpendingListEntry from './spendingListEntry.jsx';

var SpendingList = (props) => {
  return (
  <div className="spending">
    <h2>Transactions</h2>
    <table className="table">
      <thead id="spending-head">
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {props.list.map(owes => <SpendingListEntry entry={owes} />)}
      </tbody>
    </table>
    <SpendingForm submit={props.submit}/>
  </div>
  );
}

SpendingList.prototypes = {
  list: React.PropTypes.array.isRequired
};

module.exports = SpendingList;