import React from 'react';
import Product from '../../assets/img/P1000210.jpg';
import logo from '../../assets/img/botalogoclear.png';

{/* Make this a modal */}

function AboutModal() {
    return (
        <>
            {/*return main page if close out*/}
            {/*but if on click...*/}
            <div className='product-header'>
                <img className="about-logo" src={logo} /> 
                <h2>IS</h2>
                <h1>CIRCULAR COSMETICS</h1>
                <h2>FOR</h2>
                <h1>BODY & PLANET HEALTH</h1>
                <h4>INFORMED BY ANCESTRAL KNOWLEDGE, OUR FORMULAS ARE CREATED WITH METICULOUS ATTENTION TO EVERY DETAIL - EFFICACY, BEAUTY, AND SENSORY PLEASURE.</h4>
            </div>
            <img className='product-shot' src={Product} alt="product-shot"/>
            <div className='product-description'>
                <h4 className="product-float-left">01 THE PRODUCT</h4>
                <p className="product-float-right">The sincere interest in intelligent, purposeful, circular and sustainable design guides our objectives.</p>
                <p className="product-float-right">The product is a subscription-based multifunctional waterless skincare formula that initially comes in a sculptural stoneware vessel and is thereafter refillable. The refills come in a compostable packaging. The stoneware vessel is a multi use art object that can be: a cup, an oil or incense burner, trinket container - the possibilities are endless. It is designed to be used again and again, then passed down as an heirloom.</p>

                <h4 className="product-float-left">02 OUR VALUES</h4>
                <p className="product-float-right">Bota's objective is to pioneer providing the finest skincare products through a cradle-to-cradle approach, fostering a symbiotic relationship between people and the earth.</p>
                <p className="product-float-right">This product is made with deliberate attention to mindful sourcing, low CO2 emissions, H2O preservation, non-toxicity & pollution, as well as responsible afterlife.</p>

                <h4 className="product-float-left">03 PACKAGE</h4>
                <p className="product-float-right">Bota vessels are architecture & landscape. All elements of bota are 'of the land'. Contents, vessel, and packaging.</p>
            </div>
        </>
        
    )
}

export default AboutModal;