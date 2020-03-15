import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import allergyImg from '../../images/allergy.jpg';
import {Link} from 'react-router-dom';

export class BloodGroup extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/medicalfol/medicAlert/medicAlertForm">
                                    <button style={{float : 'right'}}>Add field</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/medicalertinfo" style={{textDecoration : 'none' , color : 'black'}} >
                            <DetailBox heading="Blood Group & Medic Alerts" parameter1="Name" parameter2 = "Type" parameter3="Extent" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={allergyImg}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BloodGroup
