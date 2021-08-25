function sumInput() {
    let arr = [];

    while (true) {
        let value = prompt('value','');
        if (value === "" || value === null || !isFinite(value)) {
            break;
        }
        arr.push(+value)
    }
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}

alert( sumInput() );
