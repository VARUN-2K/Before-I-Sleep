import React, { Component } from 'react';
import '../css/homepage.css';



export class Box extends Component {
    render() {
        return (
            <div>
                <div className="boxmain">
                    <h2 className="boxheading">{this.props.heading}</h2>
                    <div>
                        <ul className="contentList">
                                <li>{this.props.laa}</li>
                                <li>{this.props.lbb}</li>
                                <li>{this.props.lcc}</li>
                                <li>{this.props.ldd}</li>
                                <li>{this.props.lee}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Box
