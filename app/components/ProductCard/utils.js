export function sortByText(arr) {
    return arr.sort((a, b) => {
        if (a.text > b.text) {
            return 1;
        }
        if (a.text < b.text) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })
}

export function parseDate(date) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    const parsedDate = new Date(date).toLocaleDateString("es-ES", options)
    return parsedDate;
}