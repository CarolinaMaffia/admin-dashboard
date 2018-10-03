import React, { Component } from 'react';
import { FaShareSquare } from 'react-icons/fa';
import './AsignCard.css';

export default class AsignCard extends Component {
    render(){
        return (
            <div className="card green">
                <div className="title-card">
                    Tokens 
                </div>
                <FaShareSquare 
                className="icon"/>
                <div className="value">
                    Asign tokens
                </div>
                <div className="stat">
                    Send tokens to the users
                </div>
            </div>
        )
    }
}