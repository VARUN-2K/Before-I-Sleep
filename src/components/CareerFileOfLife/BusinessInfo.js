import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import BusinessImg from '../../images/businessImage.jpeg';
import {Link} from 'react-router-dom';

export class BusinessInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/careerfol/business/businessform">
                                    <button style={{float : 'right'}}>Add field</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/businessinfo" style={{textDecoration : 'none' , color : 'black'}}>
                            <DetailBox heading="Business"
                                        parameter1="Name of Company" 
                                        parameter2 = "Current Status" 
                                        parameter3="Contact" 
                                        p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" 
                                        image={BusinessImg}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Business"
                                    parameter1="Name of Company" 
                                    parameter2 = "Current status" 
                                    parameter3="Contact" 
                                    p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" 
                                    image={BusinessImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessInfo
