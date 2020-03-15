import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import CareTakerImg from '../../images/caretaker.webp';
import {BrowserRouter , Link} from 'react-router-dom';


export class CareTaker extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/agingfol/care/careform">
                                    <button style={{float : 'right'}}>Add field</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/careasgrowoldinfo" style={{textDecoration : 'none'  , color : 'black'}}>
                          <DetailBox heading="Care Giver" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={CareTakerImg}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Care Giver" parameter1="Name" parameter2 = "Role" parameter3="Case" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={CareTakerImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CareTaker
