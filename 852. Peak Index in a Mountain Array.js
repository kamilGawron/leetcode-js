/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    return A.indexOf(Math.max.apply(null,A));
};