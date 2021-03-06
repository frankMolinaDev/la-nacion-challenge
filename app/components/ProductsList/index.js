import { useAppContext } from '../../context/appContext';
import ProductCard from '../ProductCard';
import './styles.css';

const ProductsList = () => {
    const { filteredProductsList } = useAppContext();

    return (
        <>
            <div className='products-container'>
                {filteredProductsList.map((product, index) => {
                    return (
                        <ProductCard key={`${index}`} data={product} />
                    )
                })}
            </div>
        </>
    )
}

export default ProductsList;