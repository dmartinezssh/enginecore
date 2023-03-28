const promise = Promise.resolve("Hello");

Promise.resolve("Hello")
    .then(msg => msg + " World")
    .then(msg => msg + "!!!")
    .then(msg => console.log(msg))
