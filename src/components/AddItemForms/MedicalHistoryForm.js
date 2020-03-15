import React, { Component } from 'react'

export class MedicalHistoryForm extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>Medical File of Life > Medical History</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Most recent illness (prior to any current illness)</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Brief Description Of Illness And Treatment/Medication</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Date Of Illness</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name of Doctor Who Treated Me</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Doctor's Phone Number</label>
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Location Of X-Rays And Other Medical Records</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <small style={{opacity : '0.75' , float : 'right'}}>+Add illness</small>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">More Information About Illnesses Or Accidents</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Illness Which Run On My Natural Mother's Side Of The Family</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Illness Which Run On My Natural Father's Side Of The Family</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Notes</label>
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

export default MedicalHistoryForm
