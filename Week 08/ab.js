function match(string) {
    let foundA = false;
    for (let c of string){
        if (c == "a")
            foundA = true;
        else if (foundA && c == "b")
            return true;
        else
            foundA = false;
    }
    return false
}

match("I acbm groot")
