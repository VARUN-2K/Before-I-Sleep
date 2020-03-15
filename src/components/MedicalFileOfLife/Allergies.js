import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import allergyImg from '../../images/allergy.jpg';
import {Switch , Link ,Route , BrowserRouter} from 'react-router-dom';
import AllergyForm from '../AddItemForms/AllergyForm';

export class Allergies extends Component {
    render() {
        return (
                <div className="container">
                    <div className="row" style={{marginBottom : '1%'}}>
                        <div className="col">
                            <Link to="/medicalfol/allergy/allergyForm">
                                 <button style={{float : 'right'}}>Add Allergy</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Link to="/allergyinfo" style={{textDecoration : 'none' , color : 'black'}}>
                                <DetailBox heading="Allergy" parameter1="Name" parameter2 = "Type" parameter3="Extent" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={allergyImg}/>
                            </Link>                         
                        </div>
                        <div className="col-6">
                            <DetailBox heading="Allergy" parameter1="Name" parameter2 = "Type" parameter3="Extent" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={allergyImg}/>
                        </div>
                    </div>
                </div>
        )
    }
}