var arr = [34,57,2,4,1,64,8]

var n = arr.length;

swapped = false;

for(var i= 0; i< n-1;i++){
    swapped = false;
    console.log("Outer Loop")
    for(j = 0; j < n-i-1; j++){
        if(arr[j] > arr[j+1]){
            var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            swapped = true
        }
        console.log(arr)
    }

    // If the Swapped flag is false till here, the array is already sorted
    if(swapped == false)
        break;
}

/*
  Time Complexity : O(n) - Best Case
                    O(n^2) - Average Case
                    O(n^2) - Worst Case 
*/