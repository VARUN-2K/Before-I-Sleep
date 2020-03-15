import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import letter from '../../images/letter.png';

export class LetterLoved extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Letter" parameter1="Name of Person" parameter2 = "Relation" parameter3="Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={letter}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Letter" parameter1="Name of Person" parameter2 = "Relation" parameter3="Date" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={letter}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LetterLoved
