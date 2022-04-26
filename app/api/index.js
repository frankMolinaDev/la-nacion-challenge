export async function getProducts() {
    const res = await fetch('https://api-test-ln.herokuapp.com/articles')
    const products = await res.json();
    return products;
}