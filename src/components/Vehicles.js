import React, { Component } from 'react';
import VehicleImg from '../images/vehicle.jpg';
import DetailBox from './DetailBox';

export class Vehicles extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Vehicle Name" parameter1="Vehicle Type" parameter2="Engine Power" parameter3="Mileage" p4="This boat is a symbol of oneness and unity for our businesses" image = {VehicleImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Vehicle Name" parameter1="Vehicle Type" parameter2="Engine Power" parameter3="Mileage" p4="This boat is a symbol of oneness and unity for our businesses" image = {VehicleImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vehicles
