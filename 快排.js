function quickSort( arr ) {
    if(arr.length <= 1) return arr;
    const num = arr[0];
    let left = [], right = [];
    for(let i = 1;i < arr.length; i++) {
        if(arr[i]<=num) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat([num],quickSort(right));
}


//let test = [1,2,45,633,64,747,747,747,747,35,24,46,75,563]
//console.log(quickSort(test))
