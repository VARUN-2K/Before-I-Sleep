import React, { Component } from 'react'

export class AdvanceDirectiveInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                         <h1 style={{fontWeight : '800' , opacity : '98%'}}>Advance Directive</h1>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-download" style={{ width : '400%' , position : 'relative', top : '50%' ,  opacity : '0.6' }}></i>
                    </div>
                </div>
                
                <hr></hr>
                <br />
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Resuscitation</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Allow me to be resuscitated</h5>
                        </div>
                </div>
                        
                    
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Life Support Machines</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Do not put me on life support machines</h5>
                        </div> 
                </div>   

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Organ Donation</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>I am an organ donor</h5>
                        </div> 
                </div>  

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Blood Donation</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>I am willing to donate my blood</h5>
                        </div> 
                </div>  

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>My Directive is valid in the following countries</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>India &nbsp; Canada &nbsp; South Africa</h5>
                        </div> 
                </div>    

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Location of Signed Original Document</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>South Africa</h5>
                        </div> 
                </div>  

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Date document was signed</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>15/03/2020</h5>
                        </div> 
                </div>  

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name of Practitioner</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Charlie Davis</h5>
                        </div> 
                </div>  

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name of Hospital/Medical practice</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Irwine Hospital</h5>
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
                       
                
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Instructions and notes</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
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

export default AdvanceDirectiveInfo
