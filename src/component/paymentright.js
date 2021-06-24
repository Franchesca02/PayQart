
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


function Paymentright() {
    
    const [selected, setSelected] = useState("");
    function getSelected(id) {
        setSelected(id)
        // console.log("Selected", id)
      }

    return (
        <div className="paymentright">
            <NavLink to="/" className="arrow"><i class="fas fa-long-arrow-alt-left"></i>Back</NavLink>
            <h4 className="choose">Choose Your Plan</h4>
            
            <div className="breakdown">

                <div className={selected ==="1" ? "selected-month": "month-one"} id="1" onClick={() => getSelected("1") }>
                    <p>Aggressive</p>
                    <h1>1</h1>
                    <p>Month</p>  
                </div>

                <div className={selected ==="2" ? "selected-month": "month-two"} onClick={() => getSelected("2")}>
                
                    <p>Stretching</p>
                    <h1>2</h1>
                    <p>Months</p>
                </div>

                <div className={selected ==="3" ? "selected-month": "month-three"} id="3" onClick={() => getSelected("3")}>
                    <p>Focused</p>
                    <h1>3</h1>
                    <p>Months</p>
                </div>

                <div className={selected ==="4" ? "selected-month": "month-four"} id="4" onClick={() => getSelected("4")}>
                    <p>Courage</p>
                    <h1>4</h1>
                    <p>Months</p>
                </div>

                <div className={selected ==="5" ? "selected-month": "month-five"} id="5" onClick={() => getSelected("5")}>
                    <p>Miael</p>
                    <h1>5</h1>
                    <p>Months</p>
                </div>

                <div className={selected ==="6" ? "selected-month": "month-six"} id="6" onClick={() => getSelected("6")}>
                    <p>Gerlie</p>
                    <h1>6</h1>
                    <p>Months</p>
                </div>
            </div>

            <div className="payment-method">
                <h4 className="choose">Payment Breakdown</h4>

                <div className="shop">
                    <div className="amount">
                        <div>
                            <div className="forty">
                                <p>Shopping Credit</p> 
                                <p className="credit">#45,000</p>
                            </div>
                        </div>

                        <div className="forty">
                            <p>Down Payment</p> 
                            <p className="credit">#21,000</p>
                        </div>

                        <div className="forty">
                            <p>Monthly Installment</p> 
                            <p className="credit"> #25,000</p>
                        </div>

                        <div className="forty">
                            <p>Tenure</p> 
                            <p className="credit">1 Month</p>
                        </div>
                    </div>

            <div className="update">
                <p className='page-text'>Customize down payment</p>
                <div className="customize">| #21,000 |</div>
                <button className="butt">Update Breakdown</button>
            </div>
        </div>
<div className="buton"><button className="last-btn">Continue</button></div>
</div>

    </div>
  );
}

export default Paymentright;