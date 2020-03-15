import React, { Component } from 'react';
import DetailBox from './DetailBox';
import PetImg from '../images/pet.jpeg';

export class PetsDetailPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Pet Name" parameter1="Animal Type" parameter2="Gender" parameter3="Breed" p4="This boat is a symbol of oneness and unity for our businesses" image = {PetImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Pet name" parameter1="Animal Type" parameter2="Gender" parameter3="Breed" p4="This boat is a symbol of oneness and unity for our businesses" image = {PetImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PetsDetailPage
