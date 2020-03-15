import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import advisorImg from '../../images/financialadvisor.jpeg';

export class FinancialAdvisors extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Financial Advisor" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={advisorImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Financial Advisor" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={advisorImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FinancialAdvisors;
