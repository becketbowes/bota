import React from 'react';

function FAQ () {

    return (
        <div className="faq">
                <h1>Frequently Asked Questions</h1>
            <div className="faq-section"> 
                <h2 className="chapter">
                    Sustainability
                </h2>
            </div>
            <div>
                <h4 className='question'>
                    Where do you source your ingredients from?
                </h4>
                <p className='answer'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
            {/*Section 2 */}
            <div className="faq-section"> 
                <h2 className="chapter">
                    Shipping
                </h2>
            </div>
            <div>
                <h4 className='question'>
                    Is there a way to track my order?
                </h4>
                <p className='answer'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <h4 className='question'>
                    Do you offer refunds?
                </h4>
                <p className='answer'>
                    Bota is not able to offer refunds at this time.
                </p>
            </div>
            <div className="faq-section"> 
                <h2 className="chapter">
                    Subscription
                </h2>
            </div>
            <div>
                <h4 className='question'>
                    How often will I recieve a refill under my Bota subscription?
                </h4>
                <p className='answer'>
                    Under the Bota subscription, you will receive a body butter refill every 3 months.
                </p>
            </div>
        </div>
    
    )
};

export default FAQ;