import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import RetailImg from '../../images/retail.jpg';

export class Retail extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Donation" parameter1="Name of Organisation" parameter2 = "Role" parameter3="Amount" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={RetailImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Donation" parameter1="Name of Organisation" parameter2 = "Role" parameter3="Amount" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={RetailImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Retail
