import React, { Component } from 'react';
import './AircraftForm.css';

export class AircraftForm extends Component {

    render() {
        return (
            <div>
                <div style ={{margin : '0 auto'}}>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name of Aircraft</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Name of Aircraft" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Date of Purchase</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Date of Purchase" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Plane Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Plane Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Colour</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Colour" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Aircraft</button>
                        </form>
                    </div>
                </div>
                
                <div>

                </div>

            </div>
                
        );
    }
}

export default AircraftForm;
