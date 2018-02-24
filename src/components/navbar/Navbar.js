import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import img from '../../img/header_logo.png'
import './navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <div className='header_parent'>
                <div className='header_child'>
                    <div className='header_left'>
                        <img src={img} alt="logo"/>
                        <span className="header_left_houser">Houser</span>
                        <span className="header_left_dashboard">Dashboard</span>
                    </div>
                    <div className='header_right'>
                        <span className="header_right_logout">Logout</span>
                    </div>
                </div>
            </div>         
        )
    }
}