import React, { Component } from 'react'
import InnerBox1 from './InnerBox1';
import {Link} from 'react-router-dom';

export class CareerFileOfLife extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Link to="/careerfol/business" style={{color : 'black' , textDecoration : 'none'}}>
                            <InnerBox1 heading="Business Information" iconDesign="business-time"/>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/careerfol/certification" style={{color : 'black' , textDecoration : 'none'}}>
                            <InnerBox1 heading="Certifications & Degrees" iconDesign="university" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CareerFileOfLife
