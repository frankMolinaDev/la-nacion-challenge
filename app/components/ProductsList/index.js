import useProducts from '../../hooks/useProducts';
import useTags from '../../hooks/useTags';
import ProductCard from '../ProductCard';
import './styles.css';

const ProductsList = () => {
    const { filteredProductsList } = useProducts();
    const { processedTagsList } = useTags(filteredProductsList);
    return (
        <>
            <div className='products-container'>
                <div>
                    <ul>
                        {processedTagsList.map(tag => <li>{tag.text}</li>)}
                    </ul>
                </div>
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