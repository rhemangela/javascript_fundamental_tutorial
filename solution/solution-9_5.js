function countOccurance(arr, value) {
    let count = 0;
    for (i = 0; i < arr.length; i++)
        if (arr[i] == value)
            count++
    console.log(count);
}
countOccurance([1,2,2,0,5],-2);
