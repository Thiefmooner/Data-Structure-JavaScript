let bubbleSort = function (arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]//把大的给中间变量temp
                arr[j] = arr[j+1]//把小的给大的
                arr[j+1] = temp//把temp给小的
            }
        }
    }
    return arr
}

//时间复杂度O(n^2)稳定
//let arr = [1,22,12,13,3224,44,3245,54253,235,2546,6547654,22,34,56,5]
//console.log(bubbleSort(arr))