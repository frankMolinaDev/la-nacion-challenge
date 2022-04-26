
function Tag(props) {
    const { data } = props;
    const { text, slug } = data;
    return (
        <>
            <a href={`/tema/${slug}`}>
                <div>{text}</div>
            </a>
        </>
    )
}

export default Tag