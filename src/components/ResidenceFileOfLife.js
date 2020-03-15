import React, { Component } from 'react';
import '../css/homepage.css';
import InnerBox1 from './InnerBox1';
import {Link} from 'react-router-dom';

export class ResidenceFileOfLife extends Component {
    render() {
        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <Link to="/residencefol/info" style={{color : 'black' , textDecoration : 'none'}}>
                                <InnerBox1 heading="Residence Information" iconDesign="home"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/residencefol/maintain" style={{color : 'black' , textDecoration : 'none'}}>
                                <InnerBox1 heading="Residence Maintenance" iconDesign = "plus-square"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/residencefol/utility" style={{color : 'black' , textDecoration : 'none'}}>
                                <InnerBox1 heading ="Residence Utilities" iconDesign="tools" />
                            </Link>    
                        </div>
                    </div>
                </div>   
        )
    }
}

export default ResidenceFileOfLife
