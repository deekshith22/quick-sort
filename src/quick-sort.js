'use strict';

function quickSort(input) {
if(input instanceof Array) {
    if(input.length === 0){
        return [];
    }    
    var leftArray = [];
    var rightArray = [];
    var pivotValue = input[0];
    for(var i = 1; i < input.length; i++ ){
        if(input[i] < pivotValue){
            leftArray.push(input[i]);
        }
        else{
            rightArray.push(input[i]);
        }
    }
    return quickSort(leftArray).concat(pivotValue,quickSort(rightArray));
    }
else {
    throw Error;
}
};
module.exports = quickSort;