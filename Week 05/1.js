let object = {
    a: 1,
    b: 2
};

let po = new Proxy(object,{
    set(target, p, value, receiver) {
        console.log(target, p, value)
    }
})
