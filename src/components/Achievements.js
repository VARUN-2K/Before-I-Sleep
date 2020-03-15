import React, { Component } from 'react';
import DetailBox from './DetailBox';
import trophy from '../images/achievements.jpg'

export class Achievements extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Achievement" parameter1="Animal Type" parameter2="Gender" parameter3="Breed" p4="This boat is a symbol of oneness and unity for our businesses" image = {trophy}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Achievement" parameter1="Animal Type" parameter2="Gender" parameter3="Breed" p4="This boat is a symbol of oneness and unity for our businesses" image = {trophy}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Achievements
