/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var originPos=[0,0];
    for(let i=0;i<moves.length;i++){
        switch(moves[i]){
            case 'L': 
                originPos[0]--;
                break;
            case 'R': 
                originPos[0]++;
                break;
            case 'U': 
                originPos[1]++;
                break;
            case 'D':
                originPos[1]--;
                break;
        }
    }
   
    if((originPos[0]==0)&&(originPos[1]==0)){
        return true;
    }else{
        return false;
    }
};