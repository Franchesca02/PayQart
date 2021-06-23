
import React from 'react';


function Paymentright() {
    return (
        <div className="paymentright">
            <h4 className="choose">Choose Your Plan</h4>
            <div className="breakdown">

                <di className="month-one">
                    <p>Aggressive</p>
                    <h1>1</h1>
                    <p>Month</p>
                </di>

                <di className="month-two">
                    <p>Stretching</p>
                    <h1>2</h1>
                    <p>Months</p>
                </di>

                <di className="month-three">
                    <p>Focused</p>
                    <h1>3</h1>
                    <p>Months</p>
                </di>

                <di className="month-four">
                    <p>Courage</p>
                    <h1>4</h1>
                    <p>Months</p>
                </di>

                <di className="month-five">
                    <p>Miael</p>
                    <h1>5</h1>
                    <p>Months</p>
                </di>

                <di className="month-six">
                    <p>Gerlie</p>
                    <h1>6</h1>
                    <p>Months</p>
                </di>
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