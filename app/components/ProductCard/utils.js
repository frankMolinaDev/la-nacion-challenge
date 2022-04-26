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