import React, { Component } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ChallengeCard.css';

export default class ChallengeCard extends Component {
    render(){
        return (
            <div className="card blue">
                <div className="title-card">
                    Challenges 
                </div>
                <FaArrowUp 
                className="icon"/>
                <div className="value">
                    Edit Challenges
                </div>
                <div className="stat">
                    Manage challenges
                </div>
            </div>
        )
    }
}