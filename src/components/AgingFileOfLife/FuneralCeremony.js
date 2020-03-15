import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import Graveyard from '../../images/graveyard.jpg';

export class FuneralCeremony extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Ceremony Arrangements" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Graveyard}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Ceremony Arrangements" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Graveyard}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FuneralCeremony 