import React from "react"
import { NavLink } from "react-router-dom";
import Worker from '../files/working-lady.jpg';
import Man from '../files/working-man.jpg';
import Building from '../files/building.jpg';



function Right() {
    return (
        <div className="right">
            <h4 className="what">What Do You Do?</h4>
            <div className="organisation">
                <div className="man-icon">
                    <img src={Man} alt="A working man" />
                    {/* </div> */}
                    {/* <div className="paid"> */}
                    <p>Paid Employment</p>
                </div>
                <div className="lady-icon">
                    <img src={Worker} alt="a working lady" />
                    <p>Self employed/Freelance</p>
                </div>
                <div className="building-icon">
                    <img src={Building} alt="A bulding" />
                    <p>Corporate organisation</p>
                </div>
            </div>

            <div className="payment">
                <div className="pay-range">
                    <h6>How Much Do You Get Paid Monthly?</h6>
                    <div className="money">
                       <input type="text"/>  
                    </div>
                </div>
                <div className="salary">
                    <h6>When is Your Next Salary Date?</h6>
                    <div className="salary-date"></div>
                    <select >
                        <option className="pay-day">Select pay date</option>
                        <option>January-10-2021</option>
                        <option>February-18-2021</option>
                        <option>March-5-2021</option>
                    </select>
                    
                    
                </div>
                <div className="loan">
                    <h6>Do you Have an Existing Loan?</h6>
                    <div className="double-div">
                        <div><input  type="radio"/> <label>Yes</label></div>|    <div><input  type="radio"/> <label>No</label></div> 
                    </div>

                </div>
                <div className="btn"><button><NavLink to="/payment" style={{ textDecoration: 'none' }}>Continue</NavLink></button></div>
            </div>
            
        </div>

    );
}

export default Right;
