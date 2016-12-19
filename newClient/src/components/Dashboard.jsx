import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import Sidebar from './sidebar.jsx';
import { getUser } from '../lib/ajax.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      photoUrl: null
    };
  }

  componentWillMount() {
    getUser((data) => {
      console.log(data);
      this.setState({username: data.username, photoUrl: data.photoUrl});
      console.log(this.state);
    });
  }



  render() {
    return (
      <div id="wrapper" className="app">
      
        <div id='sidebar-wrapper'>
          <Sidebar photoUrl={this.state.photoUrl} username={this.state.username}/>
        </div>

        <div>
          {this.props.children && React.cloneElement.call(this, this.props.children)}
        </div>

      </div>
    );
  }

}

module.exports = Dashboard;