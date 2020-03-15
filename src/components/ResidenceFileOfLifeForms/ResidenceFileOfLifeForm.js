import React, { Component } from 'react';

export class ResidenceFileOfLifeForm extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>Residence File of Life > Residence Maintenance Form</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Property The Details Apply To</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <h5>Maintenance Service Provider</h5>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Select Service</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Alarm/Security</option>
                                    <option>Architect</option>
                                    <option>Automated Garage</option>
                                    <option>Other Automated Areas</option>
                                    <option>Builder/Renovator</option>
                                    <option>Caretaker/ Landlord</option>
                                    <option>Carpet/Upholstery Cleaner</option>                      
                                    <option>Electrician</option>                                                                 
                                    <option>Gardener/Garden Service</option>               
                                    <option>Handyman</option>                           
                                    <option>Housekeeper/Domestic</option>                          
                                    <option>Plumber</option>
                                    <option>Pool Service</option>
                                    <option>Well-Point / Borehole</option>
                                    <option>Other</option>
                                </select>
                             </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Service Provider Company Name"  required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="First Name (Of Person You Deal With)"  required/>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Phone Number"  required/>
                            </div>
                            <small style={{float : 'right' , opacity : '0.75' , cursor : 'pointer' }}>+Add More</small>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Instructions and Notes</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResidenceFileOfLifeForm
