import React, { Component } from 'react';
import DetailBox from './DetailBox';
import Wedding from '../images/wedding.jpg'

export class MarriageDetailPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Name" parameter1="Gender" parameter2 = "Age" parameter3="Marriage Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Wedding}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Name" parameter1="Gender" parameter2 = "Age" parameter3="Marriage Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Wedding}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarriageDetailPage
