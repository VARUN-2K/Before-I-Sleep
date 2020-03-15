import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import DebitImg from '../../images/debitImg.jpg';

export class DebitOrders extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Debit Orders" parameter1="Name" parameter2 = "Date" parameter3="Purpose" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={DebitImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Debit Orders" parameter1="Name" parameter2 = "Date" parameter3="Purpose" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={DebitImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DebitOrders
