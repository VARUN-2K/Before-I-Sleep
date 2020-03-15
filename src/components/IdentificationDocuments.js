import React, { Component } from 'react';
import DetailBox from './DetailBox';
import Documents from '../images/Documents.jpg';
import { Link} from 'react-router-dom';

export class IdentificationDocuments extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/aboutfol/identificationdocument/identificationform">
                                    <button style={{float : 'right'}}>Add field</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/identificationinfo" style={{textDecoration : 'none' , color : 'black'}}>
                            <DetailBox heading="Document Type" parameter1="Gender" parameter2 = "Age" parameter3="Marriage Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Documents}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Document Type" parameter1="Gender" parameter2 = "Age" parameter3="Marriage Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Documents}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default IdentificationDocuments
