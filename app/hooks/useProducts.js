import { useEffect, useState } from 'react'
import { getProducts } from '../api';
import { filterBySubtype } from './utils';
function useProducts() {
    const [productsList, setProductsList] = useState([]);
    const [filteredProductsList, setFilteredProductsList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let products = await getProducts();
            const {
                articles = []
            } = products;
            let filteredProducts = filterBySubtype(articles, "7");
            setProductsList(articles)
            setFilteredProductsList(filteredProducts);
        };
        getData();
    }, []);


    return {
        productsList,
        filteredProductsList
    }
}

export default useProducts;