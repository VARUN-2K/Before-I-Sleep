import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import MoneyLentImg from '../../images/moneyLent.jpg';

export class MoneyLent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Money Lent" parameter1="Name" parameter2 = "Date" parameter3="Purpose" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={MoneyLentImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Money Lent" parameter1="Name" parameter2 = "Date" parameter3="Purpose" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={MoneyLentImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoneyLent
