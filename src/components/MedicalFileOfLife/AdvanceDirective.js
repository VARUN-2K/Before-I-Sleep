import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import advanceImg from '../../images/advancedDi.jpg';
import {Link , Route } from 'react-router-dom';

export class AdvanceDirective extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                        <div className="col">
                            <Link to="/medicalfol/advanceDirective/advancedForm">
                                 <button style={{float : 'right'}}>Advance Directive</button>
                            </Link>
                        </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/advanceinfo" style={{textDecoration : 'none' , color : 'black'}}>
                            <DetailBox heading="Advance Directive" parameter1="Name" parameter2 = "Age" parameter3="Relation" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={advanceImg}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdvanceDirective;
