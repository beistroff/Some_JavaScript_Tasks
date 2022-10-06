let arr = [];

function createNewArray (arr){
    let range = 0;
    const MAX_SIZE = 500;
    do {
        range = prompt("Set size of an array: (3 <= range <= 500)");
    } while (range < 3 || range > MAX_SIZE);

    for (let i = 0; i < range; i++){
        arr[i] = prompt("arr[" + i + "]:");
        let li = document.createElement("li");
        li.innerHTML = arr[i];
        document.getElementById('arrayElem').appendChild(li);
    }
    let array = document.createElement("h3");
    array.innerHTML = arr;
    document.getElementById("wholeArr").appendChild(array);
}

createNewArray(arr);
console.log(arr);

