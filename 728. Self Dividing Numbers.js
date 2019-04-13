var selfDividing = function(n){
    let lastDigit = 0,num=n;
    while(n>0){
        lastDigit = n%10;
        if ((lastDigit==0)||((num%lastDigit)!=0)){
            return false;
        }
        n=Math.floor(n/10);
        console.log(n);

    }
    return true;
}
var selfDividingNumbers = function(left, right) {
    let i;
    let result_arr=[];
    for(i=left;i<=right;i++){
        if(selfDividing(i)){
            result_arr.push(i);
        }
    }
    return result_arr;
};

console.log(selfDividingNumbers(1,22));




