import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';

function Wares() {
    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
    const wares = data?.products || [];
    // console.log('loading: ', loading, 'products:', wares);
    // console.log('title: ', ware.title)
    // const botaPics = [img1, img2, img3];

    const handleSubmit = (e) => {
        e.preventDefault();

        //add item to cart
        console.log("You clicked me!")
    }

    return (
        <>
            {!loading && wares.map((ware) => (
                <section className='adminuItem'>
                    <span className='adminuSpace'>•••</span>
                    <div className='adminuTitle' key={ware.name}>{ware.name}</div>
                    <div className='adminuText' key={ware.description}>{ware.description}</div>
                    <div className='adminuMeta' key={ware.usdPrice}>{ware.usdPrice}¢</div>
                    <button className='adminubutton' onClick={() => handleSubmit()}>••• ADD TO CART •••</button>
                </section>
            ))}
        </>
    )
};

export default Wares;

// import { img1 } from '../../assets/img/botaprod1.jpg';
// import { img2 } from '../../assets/img/botaprod2.jpg';
// import { img3 } from '../../assets/img/botaprod3.jpg';