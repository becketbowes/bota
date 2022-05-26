import { useMutation } from '@apollo/client';
import { REMOVE_PRODUCT } from '../utils/mutations';

function RemoveProduct({id}) {
    const [removeProduct] = useMutation(REMOVE_PRODUCT, { variables: { _id: id } });
    const removeItem = async () => { 
        await removeProduct();
        // try { await new removeProduct(id); }
        // catch(err) { console.log(err) }
        // finally { alert(`item ${id} has been wiped from the face of the earth!!!`) };
    }

    return (
        <>
            <button className="adminubutton" onClick={() => removeItem('adminu')}>••! remove {id}? !••</button>
        </>
    )
}

export default RemoveProduct;