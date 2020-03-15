import React, { Component } from 'react'

export class CurrentIllnessForm extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>Medical File of Life > Current Illness</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Brief Description Of My Current Illness</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">The Medication I Am Taking And The Treatment I Am Receiving</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">How Often I Take My Medication</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Dose/Amount</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">The Time(s) Of Day I Take My Medicine</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                                <small style={{cursor : 'pointer' ,float : 'right'}}>+Add Time</small>
                            </div> 
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name of Person Looking After Me</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Phone Number of Person Looking After Me</label>
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name Of Pharmacy / Chemist Where I Get My Medicine</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Pharmacy / Chemist Phone Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Instructions and Notes</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentIllnessForm
