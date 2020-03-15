import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import AccountImg from '../../images/accountImg.jpg';


export class Accounts extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-6">
                        <DetailBox heading="My Will" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={AccountImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="My Will" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={AccountImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accounts;
