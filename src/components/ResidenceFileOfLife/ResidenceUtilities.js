import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import utilityImg from '../../images/utility.png';

export class ResidenceUtilities extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Utility" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={utilityImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Utility" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={utilityImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResidenceUtilities
