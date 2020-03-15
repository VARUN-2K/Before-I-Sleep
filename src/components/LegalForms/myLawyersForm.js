import React, { Component } from 'react'

export class myLawyersForm extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>Legal File of Life > My Lawyers</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name of Lawyer</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Role</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Brief Description Of Lawyer's Role</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Phone Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add Lawyer</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default myLawyersForm
