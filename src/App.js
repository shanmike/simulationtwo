import React, { Component } from 'react';
import './App.css';
import router from './router'
import {connect} from 'react-redux'
import Navbar from './components/navbar/Navbar'
import axios from 'axios'
import {getProperties} from './ducks/reducer'


class App extends Component {

  constructor(){
    super()
    this.state={
      properties:[],
      //View One
      propertyName: ' ',
      propertyDescription: ' ',
    }
    // View One Binds
    this.handlePropertyName = this.handlePropertyName.bind(this);
    this.handlePropertyDesccription = this.handlePropertyDesccription.bind(this)
   
  }




  // View One Methods
  handlePropertyName(e){
    this.setState({propertyName: e.target.value})
  }
  handlePropertyDesccription(e){
    this.setState({propertyDescription: e.target.value})
  }
  // Render Navbar and different Views from Router
  render() {
    return (
      <div className="dashboard_container">
          <Navbar/>
          {router}
      </div>
    );
  }
}

function mapStateToProps(state){
  const {properties} = state;
  return{
    properties
  }
}

export default connect(mapStateToProps,{getProperties})(App);
