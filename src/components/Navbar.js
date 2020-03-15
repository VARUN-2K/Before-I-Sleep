import React, { Component } from 'react';
import logo from '../images/mainLogo.jpg';
import {Link ,BrowserRouter} from 'react-router-dom';
import ButtonExampleEmphasisShorthand from './Button';

export class Navbar extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="row">
                            <Link class="navbar-brand" to="#">Before I sleep</Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                <Link class="nav-item nav-link active" to="#">Home <span class="sr-only">(current)</span></Link>
                                <Link class="nav-item nav-link" to="#">Features</Link>
                                <Link class="nav-item nav-link" to="#">Pricing</Link>
                                <Link class="nav-item nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                <div className="buttonlogin">
                                    <ButtonExampleEmphasisShorthand />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </BrowserRouter>
        );
    }
}

export default Navbar;
