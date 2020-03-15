import React, { Component } from 'react'

export class AllergyInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                         <h1 style={{fontWeight : '800' , opacity : '98%'}}>Allergy</h1>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-download" style={{ width : '400%' , position : 'relative', top : '50%' ,  opacity : '0.55' }}></i>
                    </div>
                </div>
                
                <hr></hr>
                <br />
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Allergy</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>XYZ</h5>
                        </div>
                </div>
                        
                    
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Type Of Allergy</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Food</h5>
                        </div> 
                </div>   

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>How Often I Experience This Allergy</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Thrice a month</h5>
                        </div> 
                </div>  

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Medication For This Allergy</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Crocin &nbsp; Montair &nbsp; Allegra</h5>
                        </div> 
                </div>  

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Person Who Helps Me Treat This Allergy</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Shawn Parker</h5>
                        </div> 
                </div>        

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>The Time(s) I Take The Medication</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>9:00am &nbsp; 3:00pm &nbsp; 10:00pm</h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Where I Get My Medication From</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Apollo Clinic ,&nbsp; Paras Pharmacy</h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name of Pharmacy, Clinic Or Hospital</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Medanta Hospital</h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Where I Keep My Medicine At Home</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Master Bedroom's Cupboard</h5>
                        </div> 
                </div> 

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Instructions & Notes</h5>
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

export default AllergyInfo
