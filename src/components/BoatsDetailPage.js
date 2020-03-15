import React, { Component } from 'react';
import DetailBox from './DetailBox';
import Yatch from '../images/yatch.jpg'

export class BoatsDetailPage extends Component {
    render() {
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Yatch Name" parameter1="Purchase Date" parameter2="Number" parameter3="Color" p4="This boat is a symbol of oneness and unity for our businesses" image = {Yatch}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Yatch name" parameter1="Purchase Date" parameter2="Number" parameter3="Color" p4="This boat is a symbol of oneness and unity for our businesses" image = {Yatch}/>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default BoatsDetailPage
