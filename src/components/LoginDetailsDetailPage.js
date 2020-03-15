import React, { Component } from 'react';
import DetailBox from './DetailBox';
import LoginImg from '../images/login.jpg';
import {Link , BrowserRouter} from 'react-router-dom';

export class LoginDetailsDetailPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/aboutfol/logindetailpage/loginform">
                                    <button style={{float : 'right'}}>Add field</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/logininfo" style={{textDecoration : 'none' , color : 'black'}}>
                            <DetailBox heading="Website Name" parameter1="User Name" parameter2="Id" parameter3="Password" p4="This boat is a symbol of oneness and unity for our businesses" image = {LoginImg}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Website Name" parameter1="User Name" parameter2="Id" parameter3="Password" p4="This boat is a symbol of oneness and unity for our businesses" image = {LoginImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginDetailsDetailPage
