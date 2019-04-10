/**
 * @param {string[]} words
 * @return {number}
 */
 //var words = ["gin", "zen", "gig", "msg"];
 var words=["rwjje","aittjje","auyyn","lqtktn","lmjwn"]
var uniqueMorseRepresentations = function(words) {
    var alphabet_morse =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var alphabet ='abcdefghijklmnopqrstuvwxyz';
    var morse_arr =[];
    var transformation = words.length;
    
    for(let i=0;i<words.length;i++){
    	morse_arr[i]="";
        for(let j=0;j<words[i].length;j++){
            morse_arr[i]+=alphabet_morse[alphabet.indexOf(words[i][j])];
        }
    }
    console.log(morse_arr.join(" "));
    for(let i=0;i<morse_arr.length;i++){
    	for(let j=i+1;j<morse_arr.length;j++){
    		if(morse_arr[i]==morse_arr[j]){
    			morse_arr.splice(j,1);
    			j--;
    		}
    	}
    }
    /*
    if(morse_arr.length>1){
    	for(let i=1;i<morse_arr.length+1;i++){
    		if(i[0]==i[i]){
    		morse_arr.splice(i,1);
    		morse_arr.shift();
    		transformation--;
    		}
    	}
    }
    */
    console.log(morse_arr.join(" "));

    console.log(morse_arr.length);

   
};
uniqueMorseRepresentations(words);
