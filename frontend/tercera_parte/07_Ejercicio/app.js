const a = [21, 1, 3, 5, 3, 2];

const noDuplicate = (arr) => {
    if(arr.length < 2) return -1;
    const pivot = arr[0]
    const valid = arr.slice(1).find(el => el === pivot);
    return valid ? valid : noDuplicate(arr.slice(1))
}

//console.log(noDuplicate([1,2,3,5]))
console.log(noDuplicate(a))