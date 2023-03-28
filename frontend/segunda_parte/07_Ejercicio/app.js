var array = [9, 10, 8 ,8 , 99, 76, 28, 48, 7, 34, 19];

//Primera solución
const removeDuplicate = Array.from(new Set(array));

//Segunda solución
const removeDuplicate2 = array
                            .sort((a,b) => a - b)
                            .reduce((accu, val) => 
                                accu[accu.length - 1] === val
                                ? accu
                                : [...accu, val] 
                              , [])


console.log(removeDuplicate)
console.log(removeDuplicate2)