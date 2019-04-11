/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var even=[];
    var odd=[];
    A.forEach(function(elem){
        elem%2==0? even.push(elem) : odd.push(elem);
    })
    return even.concat(odd);
};