import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import TreatmentImg from '../../images/treatment.jpg';
import {Link} from 'react-router-dom';

export class CurrentIllness extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/medicalfol/illness/illnessForm">
                                    <button style={{float : 'right'}}>Add Illness</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/illnessinfo" style={{textDecoration : 'none' , color : 'black'}}>
                             <DetailBox heading="Current Illness & Treatment" parameter1="Illness" parameter2 = "Treatment" parameter3="Extent" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={TreatmentImg}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Current Illness & Treatment" parameter1="Illness" parameter2 = "Treatment" parameter3="Extent" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={TreatmentImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentIllness
