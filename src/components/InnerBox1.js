import React, { Component } from 'react';
import '../css/Innerbox1css.css';

export class InnerBox1 extends Component {
    render() {

        let styles1 = {
            fontSize : '5em',
            color : 'Tomato',
        }
        

        return (
            <div>
                <div className="boxlayout">
                    <div className="upperIcon">
                        <div>
                            <span style={styles1}> <i className={`fa fa-${this.props.iconDesign}`} style={{position : 'relative' ,left : '38%' ,width : '300%'}}></i></span>
                        </div>
                        <div style={{backgroundColor : 'lightgrey' , fontSize : '140%', overflow : 'hidden' , textAlign : 'center' ,fontWeight : '300' ,padding : '5%'}}>
                            {this.props.heading}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default InnerBox1;
