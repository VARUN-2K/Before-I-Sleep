import React, { Component } from 'react'

export class mylawyerInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                         <h1 style={{fontWeight : '800' , opacity : '98%'}}>Lawyer</h1>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-download" style={{ width : '400%' , position : 'relative', top : '50%' ,  opacity : '0.55' }}></i>
                    </div>
                </div>
                
                <hr></hr>
                <br />
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name of Lawyer</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Barney Stinson</h5>
                        </div>
                </div>
                        
                    
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Role</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Corporate Lawyer</h5>
                        </div> 
                </div>   

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Brief Description Of Lawyer's Role</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                        </div> 
                </div>  
                         
                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Phone Number</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>+91 4562378789</h5>
                        </div> 
                </div>  
                       
                

                
                
                               
                <div className="row" style = {{marginTop : '3%'}}>
                    <div className="col-4">
                        <button type="button" className="btn btn-secondary">Edit Details</button>
                        &nbsp;&nbsp;
                        <button type="button" className="btn btn-dark">Preview</button>
                    </div>
                    <div className="col-4">
                        
                    </div>
                    <div className="col-4">
                        <button type="button"></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default mylawyerInfo
