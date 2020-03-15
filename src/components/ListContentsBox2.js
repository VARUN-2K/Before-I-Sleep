import React, { Component } from 'react';
import '../css/homepage.css';

export class ListContentsBox2 extends Component {
    render() {
        return (
            <div>
                <ul className="contentList">
                        <li>Birth Certificate,ID & Passport</li>
                        <li>Certifications,Degrees & CV</li>
                        <li>Family & Pets</li>
                        <li>Marriage/Divorce Certificates</li>
                        <li>Milestones & Achievements</li>
                </ul>
            </div>
        )
    }
}

export default ListContentsBox2;
