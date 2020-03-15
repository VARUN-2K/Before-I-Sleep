import React, { Component } from 'react'

export class CurrentIllnessInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                         <h1 style={{fontWeight : '800' , opacity : '98%'}}>Current Illness And Treatment</h1>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-download" style={{ width : '400%' , position : 'relative', top : '50%' ,  opacity : '0.55' }}></i>
                    </div>
                </div>
                
                <hr></hr>
                <br />
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Brief Description Of My Current Illness</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h5>
                        </div>
                </div>
                        
                    
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>How Often I Take My Medication</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Everyday</h5>
                        </div> 
                </div>   

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Dose/Amount</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>2 tablets a time</h5>
                        </div> 
                </div>  
                         
                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>The Time(s) Of Day I Take My Medicine</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>9:00am &nbsp; 3:00pm &nbsp; 10:00pm</h5>
                        </div> 
                </div>  
                       
                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name of Person Looking After Me</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Claire Hemsworth</h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Phone Number of Person Looking After Me</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>+91 8989898989</h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name Of Pharmacy / Chemist Where I Get My Medicine</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Paras Pharmacy</h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Pharmacy / Chemist Phone Number</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>+91 8989898989</h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Instructions & Notes</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h5>
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

export default CurrentIllnessInfo
