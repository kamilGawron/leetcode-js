/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    var repeatNumber = A.length/2;
    var counter;
    for(let i=0;i<A.length;i++){
        counter = 0;
        for (let j=0;j<A.length;j++){
            if(A[i]==A[j]){
                counter++;
            }
        }
        if(counter==repeatNumber){
            return A[i];
        }
    }
};