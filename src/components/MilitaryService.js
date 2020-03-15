import React, { Component } from 'react';
import Military from '../images/southAfrica.jpg';
import DetailBox from './DetailBox'

export class MilitaryService extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Name" parameter1="Role" parameter2 = "Age" parameter3="Duration" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Military}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Name" parameter1="Role" parameter2 = "Age" parameter3="Duration" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={Military}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MilitaryService;
