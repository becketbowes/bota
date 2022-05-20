import React from 'react';
import Product from '../../assets/img/P1000210.jpg';

{/* Make this a modal */}

function AboutModal() {
    return (
        <>
            {/*return main page if close out*/}
            {/*but if on click...*/}
            
            <h3> Bota IS CIRCULAR COSMETICS FOR BODY & PLANET HEALTH</h3>
            <h4>INFORMED BY ANCESTRAL KNOWLEDGE, OUR FORMULAS ARE CREATED WITH METICULOUS ATTENTION TO EVERY DETAIL - EFFICACY, BEAUTY, AND SENSORY PLEASURE.</h4>
            <img src={Product} alt="product-shot"/>

            <h6>01 THE PRODUCT</h6>
            <p>The sincere interest in intelligent, purposeful, circular and sustainable design guides our objectives.</p>
            <p>The product is a subscription-based multifunctional waterless skincare formula that initially comes in a sculptural stoneware vessel and is thereafter refillable. The refills come in a compostable packaging. The stoneware vessel is a multi use art object that can be: a cup, an oil or incense burner, trinket container - the possibilities are endless. It is designed to be used again and again, then passed down as an heirloom.</p>

            <h6>02 OUR VALUES</h6>
            <p>Bota's objective is to pioneer providing the finest skincare products through a cradle-to-cradle approach, fostering a symbiotic relationship between people and the earth.</p>
            <p>This product is made with deliberate attention to mindful sourcing, low CO2 emissions, H2O preservation, non-toxicity & pollution, as well as responsible afterlife.</p>


            <h6>03 PACKAGE</h6>
            <p>Bota vessels are architecture & landscape. All elements of bota are 'of the land'. Contents, vessel, and packaging.</p>
        </>
        
    )
}

export default AboutModal;