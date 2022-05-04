function deepEqual(x, y) {
    if(x === y) return true;
    if (x == null || typeof x != "object" ||
      y == null || typeof y != "object") return false;
        
    let xKeyArr = Object.keys(x);
    let yKeyArr = Object.keys(y);

    if (xKeyArr.length != yKeyArr.length) return false;

    for(let key of xKeyArr) {
        if (!yKeyArr.includes(key) || !deepEqual(x[key], y[key])) return false;
    }
    return true;
}
    