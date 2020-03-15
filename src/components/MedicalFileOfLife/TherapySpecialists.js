import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import TherapyImg from '../../images/therapy.jpg';
import {Link} from 'react-router-dom';

export class TherapySpecialists extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/medicalfol/therapy/therapyForm">
                                    <button style={{float : 'right'}}>Add Specialist</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/therapistinfo" style={{textDecoration : 'none' , color : 'black'}}>
                            <DetailBox heading="Therapy Specialist"
                                        parameter1="Name" 
                                        parameter2 = "Phone Number" 
                                        parameter3="Date of Last Appointment" 
                                        p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" 
                                        image={TherapyImg}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Therapy Specialist"
                                    parameter1="Name" 
                                    parameter2 = "Phone Number" 
                                    parameter3="Date of Last Appointment" 
                                    p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" 
                                    image={TherapyImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TherapySpecialists
