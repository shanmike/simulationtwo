import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css'

export default class Home extends Component{
    render(){
        return(
            <div className="dashboard_containerview">
                <Link to="/vOne"><button className="dash_addnew">Add new property</button></Link>
                <div className="filter_container">
                <span className="filter_description">List properties with "desired rent" greator than: $</span>
                    <input className="filter_input" placeholder="0"/>
                    <button className="filter_button">Filter</button>
                    <button className="filter_reset">Reset</button>
                </div>
                <div className="homeSpan_container">
                    <span className="home_listings_span">Home Listings</span>
                </div>
            </div>         
        )
    }
}