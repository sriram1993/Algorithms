/*
  Time Complexity : O(n) - Best Case
                    O(n^2) - Average Case
                    O(n^2) - Worst Case 
*/

var arr = [5,4,3,2,1]
var n = arr.length;

for(var i=1;i< n;i ++){
    var key = arr[i]
    j = i-1;

    while(j >= 0 && arr[j] > key){
        arr[j+1] = arr[j]
        j = j-1
    }
    arr[j + 1] = key; 
}