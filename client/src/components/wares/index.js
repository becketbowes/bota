import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { img1 } from '../../assets/img/botaprod1.jpg';
import { img2 } from '../../assets/img/botaprod2.jpg';
import { img3 } from '../../assets/img/botaprod3.jpg';

function Wares() {
    const products = [
        {
            sku:'111', 
            name:'Single Bota', 
            description:'A single ramiken of Bota', 
            usdPrice:8000, 
            image:img1, 
            imageAlt:'bota in the shower', 
            quantity: 300
        },
        {
            sku:'112', 
            name:'Annual Subscrition', 
            description:'One year of bota, delivered quarterly', 
            usdPrice:20000, 
            image:img2, 
            imageAlt:'bota in the sun', 
            quantity:200
        },
        {
            sku:'113', 
            name:'Three Year Subscription', 
            description:'one half decade of bota, sorted', 
            usdPrice:'50000', 
            image:img3, 
            imageAlt:'bota melting', 
            quantity:100
        },
    ]

    return(
        <>
            {products.length && products.map((product) => (
                        <section className='adminuItem'>
                            <div><img src={img1}></img></div>
                        </section>
            ))}

        </>
    )
};

export default Wares;