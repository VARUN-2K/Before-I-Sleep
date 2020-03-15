import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import BorrowImg from '../../images/moneyBorrowImg.jpg';

export class MoneyBorrowed extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Money Borrowed" parameter1="From" parameter2 = "Date" parameter3="Purpose" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={BorrowImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Money Borrowed" parameter1="From" parameter2 = "Date" parameter3="Purpose" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={BorrowImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoneyBorrowed
