export function filterBySubtype(arr, subtype) {
    return arr.filter(product => product.subtype === subtype);
}