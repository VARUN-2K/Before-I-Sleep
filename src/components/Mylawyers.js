import React, { Component } from 'react';
import DetailBox from './DetailBox';
import Lawyer from '../images/lawyer1.jpeg';
import {Link} from 'react-router-dom';

export class Mylawyers extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/legalfol/mylawyers/mylawyersForm">
                                    <button style={{float : 'right'}}>Add Lawyer</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/lawyerinfo" style={{textDecoration : 'none' , color : 'black'}}>
                           <DetailBox heading="My Lawyers" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Lawyer}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="My Lawyers" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Lawyer}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mylawyers;
