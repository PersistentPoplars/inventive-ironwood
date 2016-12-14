import React from 'react';
import Bootstrap from 'bootstrap-jquery';
import form-elements from '../../../assets/css/form-elements.css';

var DuesForm = (props) => (
  <form className='form-inline' onSubmit={props.submitOwesLoans}>
    <h3>Add Dues</h3>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Name"/>
    </div>
    <div id="descBox" className="form-group">
      <input type="text" className="form-control" placeholder="Description"/>
    </div>
    <div className="input-group">
      <div className="input-group-addon">$</div>
      <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

DuesForm.prototypes = {
  list: React.PropTypes.object.isRequired
};

module.exports = DuesForm
