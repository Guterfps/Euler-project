for (let n = 1; n <100000; n++) {
    let arr = []
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }

    for (let x = 1; x <= sum; x++) {
        if (sum % x === 0) {
            arr.push(x)
        }
    }
    if (arr.length === 501) {
        console.log(sum)
        break
    }
}