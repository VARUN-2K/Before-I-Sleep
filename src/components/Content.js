import React, { Component } from 'react'
import Box from './Box';
import '../css/homepage.css';
import boxFol from './MainPageBox/boxFol';
import {Link} from 'react-router-dom'; 


export class Content extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4" style={{opacity : '80%'}}>
                            <Link to = "/aboutfol" style={{textDecoration : 'none' , color : 'black'}}>
                                <Box heading="About Me File Of Life"
                                laa="Birth Certificate,ID & Passport"
                                lbb="Certifications,Degrees & CV"
                                lcc="Family & Pets"
                                ldd="Marriage/Divorce Certificates"
                                lee="Milestones & Achievements"
                                />
                            </Link>
                        </div>
                        <div className="col-4" style={{opacity : '80%'}}>
                            <Link to="/careerfol" style={{textDecoration : 'none' , color : 'black'}}>
                                <Box heading="Career File Of Life"
                                laa="Business Information"
                                lbb="Shareholders"
                                lcc="Tax Clearance Certificates"
                                ldd="Premises Access Code"
                                lee="Achievements"
                                />
                            </Link>
                        </div>
                        <div className="col-4" style={{opacity : '80%'}}>
                            <Link to="/financialfol" style={{textDecoration : 'none' , color : 'black'}}>
                                <Box heading="Financial File Of Life"
                                laa="Accounts & financial advisors"
                                lbb="Pensions RAs"
                                lcc="Debit Orders"
                                ldd="Insurances"
                                lee="Retail Accounts"
                                />
                            </Link>
                        </div>
                    </div>
                    <br/>
                    <br />
                    <div className="row">
                        <div className="col-4" style={{opacity : '80%'}}>
                            <Link to="/legalfol" style={{textDecoration : 'none' , color : 'black'}}>
                                <Box heading="Legal File Of Life" 
                                laa="Lawyers"
                                lbb="Trusts"
                                lcc="My Will"
                                ldd="Power Of Attorney"
                                lee="&Much More"/>
                            </Link>
                        </div>
                        <div className="col-4" style={{opacity : '80%'}}>
                            <Link to="/residencefol" style={{textDecoration : 'none' , color : 'black'}}>
                                <Box heading="Residence File Of Life" 
                                laa="Residence Information"
                                lbb="Residence Maintenance"
                                lcc="Residence Utilities"
                                ldd="Ownership"
                                lee="&Much More"
                                />
                            </Link>
                        </div>
                        <div className="col-4" style={{opacity : '80%'}}>
                            <Link to="agingfol" style={{textDecoration : 'none' , color : 'black'}}>
                                <Box heading ="Aging Needs File Of Life"
                                laa="Bucket List"
                                lbb="Caring for me as I grow old"
                                lcc="Funeral Arrangements"
                                ldd="Funeral Ceremony"
                                lee="Letters to loved ones" />
                            </Link>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                    <div className="col-4" style={{opacity : '80%'}}>
                            <Link to="/medicalfol" style={{textDecoration : 'none' , color : 'black'}}>
                                <Box heading="Medical File Of Life" 
                                laa="Emergency Contact"
                                lbb="Advance Directive"
                                lcc="Current Illness"
                                ldd="Medical History"
                                lee="&Much More"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
