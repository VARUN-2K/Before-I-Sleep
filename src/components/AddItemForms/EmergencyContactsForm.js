import React, { Component } from 'react'

export class EmergencyContacts extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft:'10%'}}>
                    <small style={{opacity : '0.5'}}>Medical File of Life > Emergency Contacts</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <h5>Primary Contact</h5>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">First Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Last Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Relationship</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Phone Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <h5>Secondary Contact</h5>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">First Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Last Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Relationship</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Phone Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <h5>
                                People Who You Would Like Contacted If You Are Hospitalised Or In A Serious Condition
                            </h5>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">First Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Last Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Relationship</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Phone Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                                <small style={{float : 'right' , opacity : '0.75' , cursor : 'pointer'}}>+Add more</small>
                            </div>
                            <button type="submit" className="btn btn-primary">Add Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmergencyContacts;
