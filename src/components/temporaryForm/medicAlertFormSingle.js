import React, { Component } from 'react'

export class medicAlertFormSingle extends Component {
    render() {
        return (
            <div className="form-group">
            <label htmlFor="exampleInputName">Medic Alert</label>
            <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" required/>
        </div> 
        )
    }
}

export default medicAlertFormSingle
