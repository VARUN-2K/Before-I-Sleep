import React, { Component } from 'react';
import '../../css/Information.css';

export class EmergencyContactInfo extends Component {

    

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                         <h1 style={{fontWeight : '800' , opacity : '98%'}}>Emergency Contact</h1>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-download" style={{ width : '400%' , position : 'relative', top : '50%' ,  opacity : '0.55' }}></i>
                    </div>
                </div>
                
                <hr></hr>
                <br />
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>First Name Primary Contact</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Susan</h5>
                        </div>
                </div>
                        
                    
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Last Name</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Haywood</h5>
                        </div> 
                </div>   

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Relationship</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Brother</h5>
                        </div> 
                </div>  
                         
                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Phone Number</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>+91 9999999999</h5>
                        </div> 
                </div>  
                       
                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>First Name Secondary Contact</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Claire</h5>
                        </div> 
                </div>        

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Last Name</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Tomlinson</h5>
                        </div> 
                </div>
                        
                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Relationship</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Sister</h5>
                        </div> 
                </div>
                        
                <div className="row" style = {{marginTop : '1%'}}>
                    <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Phone Number</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>+91 8888888888</h5>
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

export default EmergencyContactInfo
