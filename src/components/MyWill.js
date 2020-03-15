import React, { Component } from 'react';
import DetailBox from './DetailBox';
import will from '../images/mywill.jpg';
import {Link} from 'react-router-dom';

export class MyWill extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/legalfol/mywill/mywillform">
                                    <button style={{float : 'right'}}>My Will</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/willinfo" style={{textDecoration : 'none' , color : 'black'}}>
                            <DetailBox heading="My Will" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={will}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="My Will" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={will}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyWill
