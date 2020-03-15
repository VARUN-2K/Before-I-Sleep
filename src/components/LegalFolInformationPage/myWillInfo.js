import React, { Component } from 'react'

export class myWillInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                         <h1 style={{fontWeight : '800' , opacity : '98%'}}>My Will</h1>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-download" style={{ width : '400%' , position : 'relative', top : '50%' ,  opacity : '0.55' }}></i>
                    </div>
                </div>
                
                <hr></hr>
                <br />
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Date Will Was Last Updated</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>19/04/2019</h5>
                        </div>
                </div>
                        
                    
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Location Of Original Will</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Greece</h5>
                        </div> 
                </div>   

                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name Of Attorney/Legal Practice Which Helped Me To Create My Will</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Ted Mosby</h5>
                        </div> 
                </div>  
                         
                <div className="row" style={{marginTop  :'1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name Of Person I Dealt With</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Chandler Bing</h5>
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
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Name(s) Of People Named To Look After My Children/Pets Or Take Over Caring For Others I Am Looking After</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Claire Grace</h5>
                            <h5 style={{opacity : '67%'}}>Bob Geller</h5>
                            <h5 style={{opacity : '67%'}}>Mark Buffay</h5>
                        </div> 
                </div>        

                <div className="row" style={{marginTop : '1%'}}>
                        <div className="col-6">
                            <h5 style={{fontWeight : '400' , opacity : '94%'}}>Instructions & Notes</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{opacity : '67%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
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

export default myWillInfo
