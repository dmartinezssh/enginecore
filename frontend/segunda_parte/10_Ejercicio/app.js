const replaceValue = (number) => {
    const multiplies = { 3: 'Engine', 5: 'Core'}
    let print = '';
    Object
        .entries(multiplies)
        .forEach(([mul, val]) =>  {
            if(number % mul === 0) print += val
        })
    console.log(print === '' ? number : print);
}

for(let i=1; i <= 100; i++) replaceValue(i)