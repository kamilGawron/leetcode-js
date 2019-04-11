/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var xBinary = x.toString(2);
    var yBinary = y.toString(2);
    var counter=0;
    var greater = x>y? xBinary:yBinary;
    var smaller = x<y? xBinary:yBinary;
    var zeroCounter = greater.length-smaller.length;
    for(let i=0;i<zeroCounter;i++){
    	smaller = '0'+smaller;
    }
    for(let i=0;i<greater.length;i++){
        if(smaller[i]!=greater[i]){
            counter++;
        }
    }
    return counter;
};

