import React, { Component } from 'react'

export class AllergyForm extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft:'10%'}}>

                    <small style={{opacity : '0.5'}}>Medical File of Life > Allergy Form</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Allergy</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Type of Allergy</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">How often I Experience This Allergy</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">The Medication I Take To Help Alleviate My Allergy</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                                <small style={{float : 'right' , cursor : 'pointer'}}>+Add Medication</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Person Who Helps Me Treat This Allergy</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">The Time(s) I Take The Medication</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                                <small style={{float : 'right' , cursor : 'pointer'}}>+Add Time</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Where I Get My Medication From</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                                <small style={{float : 'right' , cursor : 'pointer'}}>+Add Place</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name Of Pharmacy, Clinic Or Hospital</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Where I Keep My Medicine At Home</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Instructions and Notes</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add Allergy</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllergyForm
