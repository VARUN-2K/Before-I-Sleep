import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import PensionImg from '../../images/pension.jpg'

export class Pensions extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Pensions RAs" parameter1="Name" parameter2 = "Date" parameter3="Purpose" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={PensionImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Pensions RAs" parameter1="Name" parameter2 = "Date" parameter3="Purpose" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={PensionImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pensions
