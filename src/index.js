module.exports = function reverse (n) {
    let result = "";
    let i = 0
    n = `${n}`;
    while (i < n.length){
        result = `${n[i]}${result}`;
        i++;
    }
    return parseInt(result);
}

