/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let iOdd=1;
    let iEven =0;
    let arr=[];
    A.forEach(function(elem){
        if(elem%2==0){
            arr[iEven]=elem;
            iEven+=2;
        }
        else{
            arr[iOdd] = elem;
            iOdd+=2;
        }
    });
    return arr;

};