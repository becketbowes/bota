import React from 'react';

function FAQ () {

    return (
        <div className="dropdown">
                <h1>Frequently Asked Questions</h1>
            {/*Section 1 */}
            <div className="faq-section"> 
                <button className="dropbtn">
                    Sustainability
                </button>
            </div>
            <div className="dropdown-content">
                <h6>
                    Where do you source your ingredients from?
                </h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
            {/*Section 2 */}
            <div className="faq-section"> 
                <button className="dropbtn">
                    Shipping
                </button>
            </div>
            <div className="dropdown-content">
                <h6>
                    Is there a way to track my order?
                </h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <h6>
                    Do you offer refunds?
                </h6>
                <p>
                    Bota is not able to offer refunds at this time.
                </p>
            </div>
            <div className="faq-section"> 
                <button className="dropbtn">
                    Subscription
                </button>
            </div>
            <div className="dropdown-content">
                <h6>
                    How often will I recieve a refill under my Bota subscription?
                </h6>
                <p>
                    Under the Bota subscription, you will receive a body butter refill every 3 months.
                </p>
            </div>
        </div>
    
    )
};

export default FAQ;