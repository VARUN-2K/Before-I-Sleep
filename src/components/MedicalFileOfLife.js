import React, { Component } from 'react';
import InnerBox1 from './InnerBox1';
import '../css/homepage.css';
import {Link} from 'react-router-dom';

export class MedicalFileOfLife extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <Link to="/medicalfol/contact" style={{color:'black' ,textDecoration : 'none'}}>
                                <InnerBox1 heading="Emergency Contacts" iconDesign="phone"/>
                            </Link>                            
                        </div>
                        <div className="col-3">
                            <Link to="/medicalfol/advanceDirective" style={{color : 'black' , textDecoration : 'none'}}>
                                <InnerBox1 heading="Advance Directive" iconDesign="scroll"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/medicalfol/allergy" style={{color : 'black' , textDecoration : 'none'}}>
                                <InnerBox1 heading="Allergies & Treatments" iconDesign="allergies"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/medicalfol/medicAlert" style={{color : 'black' , textDecoration : 'none'}}>
                                <InnerBox1 heading ="Blood Group & Medic Alert" iconDesign="plus"/>
                            </Link>
                            
                        </div>
                    </div>
                    <br/>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <Link to="/medicalfol/illness" style={{color : 'black' , textDecoration : 'none'}}>
                                <InnerBox1 heading ="Current Illness & Treatment" iconDesign="pills"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/medicalfol/MedicalHistory" style={{color : 'black' , textDecoration : 'none'}}>
                                <InnerBox1 heading ="Medical History" iconDesign="notes-medical" />
                             </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/medicalfol/therapy" style={{color : 'black' , textDecoration : 'none'}}>
                                <InnerBox1 heading ="Medical & Therapy Specialists" iconDesign="user-nurse"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MedicalFileOfLife
