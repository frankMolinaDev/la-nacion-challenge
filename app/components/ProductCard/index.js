import React from 'react'
import Tag from './Tag';
import { sortByText } from './utils';

function ProductCard(props) {
    const { data } = props;
    const { display_date, headlines, promo_items, taxonomy, website_url, _id } = data;
    const { basic } = headlines;
    const { tags = [] } = taxonomy;
    // el orden seria por el valor de count pero al no estar se hace alfabeticamente.
    const orderedTags = sortByText(tags).slice(0, 10);

    return (
        <>
            <h3>{basic}</h3>
            {orderedTags.map((tag, index) => {
                return <Tag key={`${index}`} data={tag} />
            })}
        </>
    )
}

export default ProductCard