var arr = [64,57,2,4,1,34,8]


var n = arr.length
for(var i=0;i < n-1; i++ ){
    var min_ind = i;
    for(var j = i+1; j < n;j++){
        if(arr[j] < arr[min_ind]){
            min_ind = j;
        }
    }

    // Swapping the minimum element with first element
    var temp = arr[min_ind]
    arr[min_ind] = arr[i]
    arr[i] = temp;
     console.log(arr);
}

/*
  Time Complexity : O(n^2) - Same for Best, Average and Worst Case 
  Auxilary Space : O(1)
  In place Sorting : Yes
*/