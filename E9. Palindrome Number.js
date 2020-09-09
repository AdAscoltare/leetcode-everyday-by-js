/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x=x+"";
    for(var i=0;i<Math.ceil(x.length/2);i++){
        if(x[i]!=x[x.length-1-i]) return false;
    }
    return true;
};
