import React, { Component } from 'react';
import DetailBox from './DetailBox';
import powerImg from '../images/power.jpg';
import {Link} from 'react-router-dom';

export class PowerOfAttorney extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/legalfol/powerOfAttorney/powerOfAttorneyForm">
                                    <button style={{float : 'right'}}>Add field</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Power of Attorney" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={powerImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Power of Attorney" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={powerImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PowerOfAttorney
