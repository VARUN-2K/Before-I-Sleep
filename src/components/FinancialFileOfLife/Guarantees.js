import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import gwImg from '../../images/gw.jpg';

export class Guarantees extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-6">
                        <DetailBox heading="Guarantees Warranties" parameter1="Type" parameter2 = "Product" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={gwImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Guarantees Warranties" parameter1="Type" parameter2 = "Product" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={gwImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Guarantees
