function swap(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
}

swap({ 'name': 'Mari' })
swap({ 'age': 55 })