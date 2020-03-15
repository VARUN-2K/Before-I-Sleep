import React, { Component } from 'react';
import DetailBox from './DetailBox';
import DivorceImg from '../images/divorceimage.jpg'

export class DivorceDetailPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Name" parameter1="Gender" parameter2 = "Start Date" parameter3="End Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={DivorceImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Name" parameter1="Gender" parameter2 = "Start Date" parameter3="End Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={DivorceImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DivorceDetailPage
