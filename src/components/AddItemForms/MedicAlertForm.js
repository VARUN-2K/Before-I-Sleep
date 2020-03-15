import React, { Component } from 'react';


export class MedicAlertForm extends Component {


    render() {

        return (
            <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>Medical File of Life > Medic Alert Form</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">My Blood Type</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">My Natural Mother's Blood Type</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">My Natural Mother's Blood Type</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Medic Alert</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                                <small style={{cursor : 'pointer' ,float : 'right'}} onClick={this.addFormMedicAlert}>+Add Medic Alert</small>
                            </div> 
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

export default MedicAlertForm
