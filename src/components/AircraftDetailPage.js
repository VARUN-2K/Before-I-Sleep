import React, { Component } from 'react'
import DetailBox from './DetailBox';
import AircraftImg from '../images/aircraftImg.jpg';
import {Route , Switch} from 'react-router-dom';


export class AircraftDetailPage extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button>Add aircraft</button>
                </div>
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Aircraft Name" parameter1="Purchase Date" parameter2 = "Number" parameter3="Color" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={AircraftImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Aircraft Name" parameter1="Purchase Date" parameter2 = "Number" parameter3="Color" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={AircraftImg}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AircraftDetailPage;
