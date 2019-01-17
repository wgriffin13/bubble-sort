function bubbleSort(arr){

    for(let j = arr.length; j > 1; j--){
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    bubbleSort.swap = function(){
        return 1
    }
    return arr
}

