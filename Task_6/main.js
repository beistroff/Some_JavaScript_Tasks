
function filterBy(arr, value) {
    return arr.reduce((result, currentItem) => { if (typeof currentItem != value){
        result.push(currentItem);
    }
    return result} , []);
}

console.log(filterBy([5, 24, 100, -10, 'Juice','Hi!', null, 1], 'string'));
