import React, { Component } from 'react'
import DropdownCountries from './DropdownCountries';
import dropdownCountriesBase from './dropdownCountriesBase';


export class AdvanceDirectiveForm extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>Medical File Of Life > Advance Directive</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Resuscitation</label>
                                <select class="form-control" id="exampleFormControlSelect1" required>
                                    <option>Allow me to be resuscitated</option>
                                    <option>Do not resuscitate me</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Life Support Machines</label>
                                <select class="form-control" id="exampleFormControlSelect1" required>
                                    <option>Do not put me on life support machines</option>
                                    <option>I am ok with being on life support machines</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Organ Donation</label>
                                <select class="form-control" id="exampleFormControlSelect1" required>
                                    <option>I am an organ donor</option>
                                    <option>I am open to receiving organs from other people</option>
                                    <option>I do not want to have someone else's organs in my body</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Blood Donation</label>
                                <select class="form-control" id="exampleFormControlSelect1" required>
                                    <option>I am willing to give my blood to someone who needs it</option>
                                    <option>I am open to receiving blood from other people</option>
                                    <option> I will only receive blood from my parents/siblings</option>
                                    <option>
                                       Do not put anyone else's blood into my body
                                    </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">My Directive Is Valid In The Following Countries/States</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                                <small style={{opacity : '0.75' , float : 'right'}}>+Add country</small>
                            </div>
                            <DropdownCountries />
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Date Document was Signed</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name of Practitioner</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name of hospital/Medical Practice</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Phone Number</label>
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div>        
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Instructions and Notes</label>
                                <textarea type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div> 
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdvanceDirectiveForm
