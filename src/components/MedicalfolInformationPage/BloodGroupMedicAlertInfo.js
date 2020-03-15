import React, { Component } from 'react'

export class BloodGroupMedicAlertInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                         <h1 style={{fontWeight : '800' , opacity : '98%'}}>Blood Group & Medic Alert</h1>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-download" style={{ width : '400%' , position : 'relative', top : '50%' ,  opacity : '0.55' }}></i>
                    </div>
                </div>
                
                <hr></hr>
                <br />
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>My Blood Type</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>B+</h5>
                        </div>
                </div>
                        
                    
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>My Natural Mother's Blood Type</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>B+</h5>
                        </div> 
                </div>   

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>My Natural Brother's Blood Type</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>A+</h5>
                        </div> 
                </div>  
                         
                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Medic Alert 1</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>It is a long established fact that a reader will be distracted</h5>
                        </div> 
                </div>  
                       
                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Medic Alert 2</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>when an unknown printer took a galley of type and scrambled it </h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Medic Alert 3</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>but also the leap into electronic typesetting, remaining essentially unchanged</h5>
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

export default BloodGroupMedicAlertInfo
