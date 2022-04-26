import useProducts from '../../hooks/useProducts';
import ProductCard from '../ProductCard';

const ProductsList = () => {
    const { filteredProductsList } = useProducts();
    return (
        <>
            {filteredProductsList.map((product, index) => {
                return (
                    <ProductCard key={`${index}`} data={product} />
                )
            })}
        </>
    )
}

export default ProductsList;