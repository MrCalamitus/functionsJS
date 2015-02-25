function orderArrayObjects(array, parameter, order) {
    return array.sort(dynamicSort(parameter, order));
}

function dynamicSort(property, order) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = null
        if (order == undefined || order == 'asc') {
            result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        } else if (order == 'desc') {
            result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
        }
        return result * sortOrder;
    };
}