import React, { Component } from 'react';
import '../css/homepage.css';
import InnerBox1 from './InnerBox1';
import {BrowserRouter ,Link , Route , Switch} from 'react-router-dom';
import Mylawyers from './Mylawyers';


export class LegalFileOfLife extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Link to="/legalfol/mylawyers" style={{color : 'black',textDecoration : 'none'}}>
                            <InnerBox1 heading="My Lawyers" iconDesign="balance-scale" />
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/legalfol/mytrusts" style={{color : 'black',textDecoration : 'none'}}>
                            <InnerBox1 heading="My Trusts" iconDesign="handshake"/>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/legalfol/mywill" style={{color : 'black',textDecoration : 'none'}} >
                            <InnerBox1 heading="My Will" iconDesign="scroll"/>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/legalfol/powerOfAttorney" style={{color : 'black',textDecoration : 'none'}}>
                            <InnerBox1 heading="Power of Attorney" iconDesign="user-friends"/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LegalFileOfLife
