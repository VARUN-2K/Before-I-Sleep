import React, { Component } from 'react';
import MembershipImg from '../images/membership.jpg';
import DetailBox from './DetailBox';

export class Membership extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Organisation Name" parameter1="Animal Type" parameter2="Gender" parameter3="Breed" p4="This boat is a symbol of oneness and unity for our businesses" image = {MembershipImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Organisation Name" parameter1="Animal Type" parameter2="Gender" parameter3="Breed" p4="This boat is a symbol of oneness and unity for our businesses" image = {MembershipImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Membership
