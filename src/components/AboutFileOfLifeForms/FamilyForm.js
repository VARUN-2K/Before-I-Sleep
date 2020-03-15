import React, { Component } from 'react'

export class FamilyForm extends Component {
    render() {
        return (
            <div>
                <div>
                <div style={{marginLeft : '10%'}}>
                    <small style={{opacity : '0.5'}}>About File of Life > Family Form</small>
                    <div className="card outerDiv" style={{padding : '2%' , width : '85%'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Relationship</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">First Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Last Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">ID/Social Security Number</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Date of Birth</label>
                                <input type="date" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Upload Birth Certificate</label>
                                <input type="file" className="form-control" id="exampleInput" aria-describedby="emailHelp"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Upload Photograph</label>
                                <input type="file" className="form-control" id="exampleInput" aria-describedby="emailHelp"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Cell Phone Number</label>
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">First Name Of Person Who Will Take Over Your Responsibility For This Person</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Last Name Of Person Who Will Take Over Your Responsibility For This Person</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Carer's Phone Number</label>
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Carer's Email</label>
                                <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Address Where The Person Lives If Not With You (if With You, Type “Lives With Me”)</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name Of Pre-School / School / College / University / Rehab Centre / Elder Care Facility / Old Age Home</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Address</label>
                                <input style={{marginBottom : '2px'}} type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Address Line 1" required/>
                                <input style={{marginBottom : '2px'}} type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Address Line 2" />
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Address Line 3" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Contact Person’s First Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Contact Person’s Last Name</label>
                                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Contact Person’s Home Number</label>
                                <input type="tel" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Contact Person’s Email</label>
                                <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp"  required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">What I am Responsible For That Someone May Have To Deal With If I Cannot</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Describe This Person's Daily Routine</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">This Person's Special Dietary Considerations</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">This Person's Medical Considerations</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Extramural Activities, Lift Club Details etc. (if Applicable)</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">What Makes This Person's Happiest And What To Avoid</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Traumas And Challenges</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Favourite Activities (Including Games, Sports & Music)</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Their Best Friends And How They May be Contacted</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Note Any Special Abilities, Awards & Accomplishments</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Instructions & Notes</label>
                                <textarea type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default FamilyForm
