import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import CoffinImg from '../../images/coffin.jpg';

export class FuneralArrangements extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Funeral Arrangements" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={CoffinImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Funeral Arrangements" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={CoffinImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FuneralArrangements
