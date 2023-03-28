s = "abacabad";

const getValueNoDuplicate = str => {
    if(str.length  === 0) return null; 
    if(str.length  === 1) return str;

    const pivot = str[0];
    const valid = str.substring(1).includes(pivot);
    return valid ? getValueNoDuplicate(str.replaceAll(pivot, '')) : pivot;
}

console.log(getValueNoDuplicate(s))