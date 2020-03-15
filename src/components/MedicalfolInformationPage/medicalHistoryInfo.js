import React, { Component } from 'react'

export class medicalHistoryInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                         <h1 style={{fontWeight : '800' , opacity : '98%'}}>Medical History</h1>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-download" style={{ width : '400%' , position : 'relative', top : '50%' ,  opacity : '0.55' }}></i>
                    </div>
                </div>
                
                <hr></hr>
                <br />
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Most recent illness (prior to any current illness)</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Throat Infection</h5>
                        </div>
                </div>
                        
                    
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Brief Description Of Illness And Treatment/Medication</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h5>
                        </div> 
                </div>   

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Date Of Illness</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>20/03/2020</h5>
                        </div> 
                </div>  

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name of Doctor Who Treated Me</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Liam Pitt</h5>
                        </div> 
                </div>          

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Doctor's Phone Number</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>+91 4556674523</h5>
                        </div> 
                </div>  
                       
                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Location Of X-Rays And Other Medical Records</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>when an unknown printer took a galley of type and scrambled it </h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>More Information About Illnesses Or Accidents</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Illness Which Run On My Natural Mother's Side Of The Family</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>when an unknown printer took a galley of type and scrambled it </h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Illness Which Run On My Natural Father's Side Of The Family</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>when an unknown printer took a galley of type and scrambled it </h5>
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

export default medicalHistoryInfo
