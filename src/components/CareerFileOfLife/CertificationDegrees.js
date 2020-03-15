import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import CertificationImg from '../../images/certification.jpg';

export class CertificationDegrees extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Certificaton"
                                    parameter1="Name of Institution" 
                                    parameter2 = "Course" 
                                    parameter3="Name of Degree" 
                                    p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" 
                                    image={CertificationImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Certificaton"
                                    parameter1="Name of Institution" 
                                    parameter2 = "Course" 
                                    parameter3="Name of Degree" 
                                    p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" 
                                    image={CertificationImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CertificationDegrees
