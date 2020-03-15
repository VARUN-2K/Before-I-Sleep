import React, { Component } from 'react';
import '../css/homepage.css';
import InnerBox1 from './InnerBox1';

export class DeceasedEstateFile extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <InnerBox1 heading="Documents Required For Deceased" iconDesign="folder-open"/>
                    </div>
                    <div className="col-3">
                        <InnerBox1 heading="Documents Required For Executors" iconDesign="folder-open" />
                    </div>
                </div>
            </div>
        )
    }
}

export default DeceasedEstateFile;
