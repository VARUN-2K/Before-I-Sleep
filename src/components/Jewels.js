import React, { Component } from 'react';
import JewelImg from '../images/sapphire.jpg';
import DetailBox from './DetailBox';

export class Jewels extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Jewel Type" parameter1="Purchase Date" parameter2 = "Cost Price" parameter3="Purity" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={JewelImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Jewel Type" parameter1="Purchase Date" parameter2 = "Cost Price" parameter3="Purity" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={JewelImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jewels
