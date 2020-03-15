import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import MedicalHistoryImg from '../../images/medicalHistory.jpg';
import {Link} from 'react-router-dom';

export class MedicalHistory extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/medicalfol/medicalHistory/medicalHistoryForm">
                                    <button style={{float : 'right'}}>Add field</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/medicalhistoryinfo" style={{textDecoration : 'none' , color : 'black'}} >
                              <DetailBox heading="Medical History" parameter1="Illness" parameter2 = "Medication" parameter3="Doctor Name" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={MedicalHistoryImg}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Medical History" parameter1="Illness" parameter2 = "Medication" parameter3="Doctor Name" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={MedicalHistoryImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MedicalHistory
