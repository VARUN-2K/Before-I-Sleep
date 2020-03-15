import React, { Component } from 'react';
import DetailBox from './DetailBox';
import PartnerImg from '../images/partnership1.jpg';

export class Partnerships extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Partner Name" parameter1="Gender" parameter2 = "Age" parameter3="Marriage Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={PartnerImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Partner Name" parameter1="Gender" parameter2 = "Age" parameter3="Marriage Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={PartnerImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Partnerships
