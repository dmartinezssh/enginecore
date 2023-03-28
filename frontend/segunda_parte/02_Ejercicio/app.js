var array = [9, 10, 8 ,8 , 99, 76, 28, 48, 7, 34, 19];

const sort = arr => {
    if(arr.length < 2) {
        return arr;
    } else {
        const pivot = arr[0];
        const smaller = arr.slice(1).filter(x => x < pivot);
        const granterEqual = arr.slice(1).filter(y => y >= pivot)
        return [...sort(smaller), pivot, ...sort(granterEqual)]
    }
}

console.log(sort(array))
console.log(array.sort((a,b) => a - b))