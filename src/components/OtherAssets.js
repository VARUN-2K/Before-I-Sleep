import React, { Component } from 'react';
import DetailBox from './DetailBox';
import Assets from '../images/assets.jpg';

export class OtherAssets extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Asset" parameter1="Asset Type" parameter2 = "Age" parameter3="Marriage Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Assets}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Asset" parameter1="Asset Type" parameter2 = "Age" parameter3="Marriage Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Assets}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OtherAssets;
