import React, { Component } from 'react';
import '../css/homepage.css';
import InnerBox1 from './InnerBox1';
import {Link }from  'react-router-dom';

export class AgingNeedsFileOfLife extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Link to="/agingfol/bucketlist" style={{color : 'black' ,textDecoration: 'none'}}>
                            <InnerBox1 heading="Bucket List" iconDesign="list-alt"/>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/agingfol/care" style={{color : 'black' ,textDecoration: 'none'}}>
                            <InnerBox1 heading = "Caring For Me As I Grow Old" iconDesign="hands-helping" />
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/agingfol/funeralarrangements" style={{color : 'black' ,textDecoration: 'none'}}>
                            <InnerBox1 heading="Funeral Arrangements" iconDesign="book-dead"  />
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/agingfol/ceremony" style={{color : 'black' ,textDecoration: 'none'}}>
                            <InnerBox1 heading="Funeral Ceremony" iconDesign="skull-crossbones"/>
                        </Link>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-3">
                        <Link to="/agingfol/letter" style={{color : 'black' ,textDecoration: 'none'}} >
                            <InnerBox1 heading="Letters To Loved Ones" iconDesign="envelope"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AgingNeedsFileOfLife
