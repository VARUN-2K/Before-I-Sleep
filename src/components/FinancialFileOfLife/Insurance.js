import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import InsuranceImg from '../../images/insuranceImg.jpg';

export class Insurance extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Insurance" parameter1="Type" parameter2 = "Date" parameter3="Claim" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={InsuranceImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Insurance" parameter1="Type" parameter2 = "Date" parameter3="Claim" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={InsuranceImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Insurance
