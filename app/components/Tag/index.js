
const Tag = (props) => {
    const { data, className } = props;
    const { text, slug } = data;
    return (
        <>
            <a href={`/tema/${slug}`} className={className || 'product-card-tag'}>
                <p>{text}</p>
            </a>
        </>
    )
}

export default Tag;