export function filterBySubtype(arr, subtype) {
    return arr.filter(product => product.subtype === subtype);
}

export function sortTagsByCount(arr) {
    return arr.sort((a, b) => {
        if (a.count < b.count) {
            return 1;
        }
        if (a.count > b.count) {
            return -1;
        }
        return 0;
    })
}
export function getProcessedTags(arr) {
    let tagsMap = new Map();

    arr.forEach(product => {
        let { taxonomy } = product;
        let { tags } = taxonomy;
        tags.forEach(tag => {
            const { text } = tag;
            let tagElement = tagsMap.get(text);
            if (!tagElement) {
                tagsMap.set(text, { ...tag, count: 1 })
            } else {
                let newTag = { ...tag, count: tagElement.count + 1 };
                tagsMap.set(text, newTag);
            }
        })
    });
    let topTenTags = sortTagsByCount(Array.from(tagsMap.values())).slice(0, 10);
    return topTenTags;
}