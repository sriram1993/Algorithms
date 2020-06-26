console.log("Insertion Sort")

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