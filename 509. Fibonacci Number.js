var fib = function(N) {
   // 0,1,1,2,3,5,8,13
    let fibo =[0,1];
    let i;
    for(i=2;i<=N;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo[N];
};

