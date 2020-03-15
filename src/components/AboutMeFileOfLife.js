import React, { Component } from 'react';
import '../css/homepage.css';
import InnerBox1 from './InnerBox1';
import {Link} from 'react-router-dom';


export class AboutMeFileOfLife extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <Link to="/aboutfol/aircraft" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading="Aircraft" iconDesign="plane"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/boats" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading="Boats" iconDesign="ship"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/identificationdocument" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Identification documents" iconDesign="file"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/jewels" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Jewels" iconDesign="gem"/>
                            </Link>
                        </div>
                    </div>
                    <br/>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <Link to="/aboutfol/family" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Family" iconDesign="home"/>
                            </Link>    
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/marriage" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Marriage" iconDesign="ring"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/partnership" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Partnerships" iconDesign="handshake"/>
                            </Link> 
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/divorce" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Divorces" iconDesign="heart-broken"/>
                            </Link>
                        </div>   
                    </div>
                    <br/>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <Link to="/aboutfol/pets" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Pets" iconDesign="paw"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/achievement" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Achievements" iconDesign="trophy"/>
                            </Link>    
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/membership" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Memberships" iconDesign="user"/>
                            </Link> 
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/military" style={{color : 'black' , textDecoration:'none'}} >
                                <InnerBox1 heading ="Military Service" iconDesign="fighter-jet"/>
                            </Link>
                        </div>
                    </div>
                    <br/>
                    <br />
                    </div>
                    <div className="row">
                        
                        <div className="col-3">
                            <Link to="/aboutfol/logindetailpage" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Login Details" iconDesign="user-check"/>
                            </Link> 
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/vehicle" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Vehicles" iconDesign="car"/>
                            </Link> 
                        </div>
                        <div className="col-3">
                            <Link to="/aboutfol/asset" style={{color : 'black' , textDecoration:'none'}}>
                                <InnerBox1 heading ="Other Assets" iconDesign="building"/>
                            </Link>
                        </div>
                    </div>
            </div>
        )
    }
}

export default AboutMeFileOfLife
