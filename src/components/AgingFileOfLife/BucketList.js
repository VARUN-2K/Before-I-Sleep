import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import bucketImg from '../../images/bucketList.jpg';

export class BucketList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <DetailBox heading="Wish" parameter1="S.no" parameter2 = "The Wish" parameter3="Done" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={bucketImg}/>
                    </div>
                    <div className="col-6">
                        <DetailBox heading="Wish" parameter1="S.no" parameter2 = "The Wish" parameter3="Done" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={bucketImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BucketList
