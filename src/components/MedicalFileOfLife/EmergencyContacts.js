import React, { Component } from 'react';
import DetailBox from '../DetailBox';
import EmergencyContactImg from '../../images/contacts.jpeg'; 
import EcontactForm from '../AddItemForms/EmergencyContactsForm';
import {Link , Switch , Route} from 'react-router-dom';

export class EmergencyContacts extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" style={{marginBottom : '1%'}}>
                            <div className="col">
                                <Link to="/medicalfol/contact/contactForm">
                                    <button style={{float : 'right'}}>Add Contact</button>
                                </Link>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-6">
                            <Link to="/emergencyinfo" style={{textDecoration : 'none' , color : 'black'}}>
                               <DetailBox heading="Contact" parameter1="Name" parameter2 = "Age" parameter3="Relation" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={EmergencyContactImg}/>
                            </Link>
                        </div>
                        <div className="col-6">
                            <DetailBox heading="Contact" parameter1="Name" parameter2 = "Age" parameter3="Relation" p4="jdnvdo vv dnvd indvdv jvnvldfv ivndlv d" image={EmergencyContactImg}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default EmergencyContacts
