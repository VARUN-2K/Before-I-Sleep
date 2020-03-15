import React, { Component } from 'react'

export class PowerOfAttorney extends Component {
    render() {
        return (
            <div>
                <div style = {{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>Legal File Of Life > Power Of Attorney</small>
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
                                <small style={{cursor : 'pointer' ,float : 'right'}}>+Add Medic Alert</small>
                            </div> 
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PowerOfAttorney
