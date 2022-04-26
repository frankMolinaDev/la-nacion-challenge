import useProducts from '../../hooks/useProducts';
import ProductCard from '../ProductCard';
import './styles.css';

const ProductsList = () => {
    const { filteredProductsList } = useProducts();
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