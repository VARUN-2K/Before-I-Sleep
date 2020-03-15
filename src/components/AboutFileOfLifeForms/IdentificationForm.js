import React, { Component } from 'react'
import CountryList from '../AddItemForms/CountryList';



export class IdentificationForm extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>About File of Life > Identification Documents</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">National Identity Card</label>
                                <input type="file" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Date Of Birth</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Time of Birth</label>
                                <input type="time" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Location of Birth</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Country of Birth</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Birth Certificate Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Citizenship Notes</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">ID / Social Security Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Passport Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Passport Expiry Date</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Driver's License</label>
                                <input type="file" className="form-control" id="exampleInput" aria-describedby="emailHelp"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Driver's License Expiry Date</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp"  />
                            </div>
                            <div className="form-group">
                                <CountryList name = "VISA" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">VISA Expiry Date</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp"  />
                                <small style={{float : 'right' , opacity : '0.75'}}>+Add more</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Personal Tax Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Police Clearance Certificate</label>
                                <input type="file" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Police Clearance Expiry Date</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Location Of All The Above Original Documents</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Firearm License Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Where Firearm is kept</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Instructions & Notes</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default IdentificationForm
