import React, { Component } from 'react';
import DetailBox from './DetailBox';
import TrustImg from '../images/trust.png';
import {Link } from 'react-router-dom';

export class Trust extends Component {
    render() {
        return (
            <div className="container">
                    <div className="row" style={{marginBottom : '1%'}}>
                                <div className="col">
                                    <Link to="/legalfol/mytrusts/mytrustsForm">
                                        <button style={{float : 'right'}}>Add field</button>
                                    </Link>
                                </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <DetailBox heading="My Trusts" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={TrustImg}/>
                        </div>
                        <div className="col-6">
                            <DetailBox heading="My Trusts" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={TrustImg}/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Trust
