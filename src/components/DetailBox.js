import React, { Component } from 'react';


export class DetailBox extends Component {
 
    styles = {
        overflow: 'hidden',
        boxShadow : `0px 0px 25px rgba(0,0,0,0.2) `,
        width : `35rem`,
        margin : '2%'
    }

    render() {
        return (
            <div>
                <div className="card" style={this.styles}>
                <img src={this.props.image} className="card-img-top" alt="image" style={{height : '16rem' , backgroundSize:'cover',backgroundPosition:'center'}}/>
                <div className="card-body container">
                    <div style={{margin : '2.5%'}}>
                        <h4>{this.props.heading}</h4>
                        <div className="row">
                                <div className="col-4">
                                    {this.props.parameter1}<br></br>
                                    <span style={{opacity : 0.5}}>12 Jan 2012</span>
                                </div>
                                <div className="col-4">
                                    {this.props.parameter2}<br />
                                    <span style={{opacity : 0.5}}>ABCD 12</span>
                                </div>
                                <div className="col-4">
                                    {this.props.parameter3}<br />
                                    <span style={{opacity : 0.5}}>White</span>
                                </div>
                            </div>
                        <hr />
                        <h6>Description</h6>
                        <span style={{opacity : '0.5'}}>{this.props.p4}</span>
                    </div>   
                </div>
                </div>
            </div>
        );
    }
}

export default DetailBox;
