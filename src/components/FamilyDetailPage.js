import React, { Component } from 'react';
import DetailBox from './DetailBox';
import Family from '../images/family.jpg';
import {Link} from 'react-router-dom';

export class FamilyDetailPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/aboutfol/family/familyform">
                                    <button style={{float : 'right'}}>Add field</button>
                                </Link>
                            </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/familyinfo" style={{textDecoration : 'none' , color : 'black'}}>
                            <DetailBox heading="Name" parameter1="Gender" parameter2 = "Age" parameter3="Relation" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Family}/>
                        </Link>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Name" parameter1="Gender" parameter2 = "Age" parameter3="Relation" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Family}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FamilyDetailPage
