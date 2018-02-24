import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updatePropertyName, updatePropertyDescription} from '../../../ducks/reducer'
import img from '../../../img/step_active.png'
import img2 from '../../../img/step_inactive.png'
import img3 from '../../../img/step_completed.png'


class ViewOne extends Component{
    render(){
        const {updatePropertyName, updatePropertyDescription} = this.props;
        return(
            <div className="dashboard_containerview">
               <div className="viewOne_header">
                    <span className="viewOne_add">Add new listing</span>
                    <Link to="/"><button className="viewOne_cancel">Cancel</button></Link>
               </div> 
               <div className="view_step_container">
                    <span className="view_step_span">Step 1</span>
                    <div className="step_highlight">
                        <img src={img3} alt="logo"/>
                        <img src={img} alt="logo"/>
                        <img src={img2} alt="logo"/>
                        <img src={img2} alt="logo"/>
                        <img src={img2} alt="logo"/>
                    </div>
               </div>
               <div className="step_container">
                    <span className="step_name">
                        <span className="input_header">Property Name</span>
                    </span>
                    <input className="step_input" type='text' onChange={(e)=>updatePropertyName(e.target.value)}/>
                    <span className="step_name"><span className="input_header">Property Description</span></span>
                    <input className="step_description_input"type='text' onChange={(e)=>updatePropertyDescription(e.target.value)}/>  
                <div className='next_step_button'>
                    <Link to="/vTwo"><button className="viewOne_cancel">Next Step</button></Link>
                </div>  
                </div>  
            </div>
        )
    }
}

function mapStateToProps(state){
    const {propertyName, propertyDescription} = state;
    console.log("Henry", state)
    return{
        propertyName,
        propertyDescription
    }
}

export default connect(mapStateToProps,{updatePropertyName,updatePropertyDescription})(ViewOne);