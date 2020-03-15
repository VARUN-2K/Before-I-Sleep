import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import MaintainImg from '../../images/maintainImg.jpg';
import {Link} from 'react-router-dom';

export class ResidenceMaintain extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/residencefol/maintain/maintainform">
                                    <button style={{float : 'right'}}>Add field</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Residence" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={MaintainImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Residence" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={MaintainImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResidenceMaintain
