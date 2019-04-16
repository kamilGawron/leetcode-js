var reverseWords = function (s) {
    let arr = s.split(' ');
    let result_arr;
    result_arr = arr.map(function (elem) {
        return elem.split("").reverse().join('');
    })
    return result_arr.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));