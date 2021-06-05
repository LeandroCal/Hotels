export function updateArray(array, value, selected) {
    const exist = array.find(val => val === value);
    if (selected && !exist) array.push(value);
    if (!selected) array.pop(value);

    return array;
}

export const filter = (items, filters) => {
    return items.filter(item => {
        var keys = Object.keys(filters);
        return keys.filter(keyToFilterOn => {
            if (!filters[keyToFilterOn] || filters[keyToFilterOn].length === 0) return false;

            return ((typeof item[keyToFilterOn] === 'string' && 
                typeof filters[keyToFilterOn] === 'string' && 
                item[keyToFilterOn] !== filters[keyToFilterOn]) || 
                (typeof filters[keyToFilterOn] === 'object' && 
                !filters[keyToFilterOn].find(record => String(record) === String(item[keyToFilterOn]))))
            }).length === 0;
    });    
};

export function checkProperties(obj) {
    for (var key in obj) {
        if (obj[key] !== null && obj[key] !== "" && obj[key].length !== 0) return false;
    }
    return true;
};