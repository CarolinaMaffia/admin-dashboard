import React, { Component } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import './ValueCard.css';

export default class ValueCard extends Component {
    render(){
        return (
            <div className="card orange">
                <div className="title-card">
                    Token Value 
                </div>
                <FaRegEdit 
                className="icon"/>
                <div className="value">
                    $27.8
                </div>
                <div className="stat">
                    Current token value
                </div>
            </div>
        )
    }
}