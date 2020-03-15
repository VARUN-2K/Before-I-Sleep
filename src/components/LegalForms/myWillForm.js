import React, { Component } from 'react'

export class myWillForm extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>Legal File Of Life > My Will</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Date Will Last Updated</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Location of Original Will</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name Of Attorney/Legal Practice Which Helped Me To Create My Will</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name of Person I Dealt With</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Phone Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name(s) Of People Named To Look After My Children/Pets Or Take Over Caring For Others I Am Looking After</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                                <small style={{opacity : '0.5' , float : 'right'}}>+Add Name</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Instructions & Notes</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <button className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default myWillForm
