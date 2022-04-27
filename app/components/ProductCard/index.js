import Tag from '../Tag';
import { parseDate, sortByText } from './utils';
import './styles.css';

function ProductCard(props) {
    const { data } = props;
    const { display_date, headlines, promo_items, taxonomy, website_url, _id } = data;
    const { basic } = headlines;
    const { tags = [] } = taxonomy;

    const parsedDisplayDate = parseDate(display_date);
    const { basic: basicImageOptions } = promo_items;
    const { url } = basicImageOptions;

    return (
        <>
            <div className='product-card-wrapper'>
                <img src={url} alt={''} />
                <div className='product-card-content-wrapper'>
                    <h3>{basic}</h3>
                    {tags.map((tag, index) => {
                        return <Tag key={`${index}`} data={tag} />
                    })}
                    <p><strong>{parsedDisplayDate}</strong></p>
                </div>
            </div>
        </>
    )
}

export default ProductCard