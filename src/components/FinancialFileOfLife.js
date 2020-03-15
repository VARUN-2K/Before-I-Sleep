import React, { Component } from 'react';
import InnerBox1 from './InnerBox1';
import '../css/homepage.css';
import {Link} from 'react-router-dom';

export class FinancialFileOfLife extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <Link to="/financialfol/accounts" style={{color:'black' ,textDecoration:'none'}}>
                                <InnerBox1 heading="Accounts" iconDesign="dollar-sign"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/financialfol/advisors" style={{color:'black' ,textDecoration:'none'}}>
                                <InnerBox1 heading="Financial Advisors" iconDesign="handshake"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/financialfol/moneyborrow" style={{color:'black' ,textDecoration:'none'}}>
                                <InnerBox1 heading="Money Borrowed" iconDesign="money-bill-wave"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to ="/financialfol/moneylent" style={{color:'black' ,textDecoration:'none'}}>
                                <InnerBox1 heading ="Money Lent" iconDesign="money-bill-wave"/>
                            </Link>
                        </div>
                    </div>
                    <br/>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <Link to="/financialfol/pension" style={{color:'black' ,textDecoration:'none'}}>
                                <InnerBox1 heading ="Pensions RAs" iconDesign="money-check-alt"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/financialfol/debitOrders" style={{color:'black' ,textDecoration:'none'}}>
                                <InnerBox1 heading ="Debit Orders" iconDesign="credit-card"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/financialfol/donations" style={{color:'black' ,textDecoration:'none'}}>
                                <InnerBox1 heading ="Donations" iconDesign="donate"/>
                            </Link> 
                        </div>
                        <div className="col-3">
                            <Link to="/financialfol/gw" style={{color:'black' ,textDecoration:'none'}}>
                                <InnerBox1 heading ="Guarantees Waranties" iconDesign="hands-helping"/>
                            </Link> 
                        </div>
                    </div>
                    <br/>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <Link to="/financialfol/insurance" style={{color:'black' , textDecoration:'none'}}>
                                 <InnerBox1 heading ="Insurance" iconDesign="house-damage"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/financialfol/retail" style={{color:'black' , textDecoration:'none'}}>
                                 <InnerBox1 heading ="Retail Accounts" iconDesign="clipboard"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FinancialFileOfLife
