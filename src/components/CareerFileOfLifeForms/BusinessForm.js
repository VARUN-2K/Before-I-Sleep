import React, { Component } from 'react'

export class BusinessForm extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>Career File Of Life > Business Form</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Current Status</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Work Permit Details</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name Of Company I Work For/Own</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Business Registration Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Personal Income Tax Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Date Business Founded</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Business Phone Number</label>
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Physical Address</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Address Line 1"  required/>
                                <input style={{marginTop : '0.3%'}} type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Address Line 2"  />
                                <input style={{marginTOp : '0.3%'}} type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Address Line 3"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name Of Owner/Boss</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Location Of Office Keys And Access Codes/Key</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name Of Key Holder</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Phone Number Of Key Holder</label>
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Business Tax Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">File Proof Of Personal & Business Income Tax Numbers</label>
                                <input type="file" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">VAT Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">SDL Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">UIF Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Efiling Login In and Password Location</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Shareholder Names, Contact Details & % Of Shares Held (if applicable)</label>
                                <input type="text"  className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Name" />
                                <input type="tel" style={{marginTop : '0.3%'}} className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Contact"  />
                                <input type="text" style={{marginTop : '0.3%'}} className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Percentage of Shares Held"/>
                                <small style={{float : 'right' , opacity : '0.75' , cursor :'pointer'}}>+Add more</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Patents, Trademarks & Other Pertinent Info</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Company Website Url</label>
                                <input type="url" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Website Host eg. Bluehost</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Website Contact Person</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Phone Number</label>
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessForm
