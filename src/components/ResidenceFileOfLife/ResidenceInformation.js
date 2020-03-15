import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import residenceImg from '../../images/residence.jpg';

export class ResidenceInformation extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Residence Information" parameter1="Address" parameter2 = "City" parameter3="State" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={residenceImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResidenceInformation
