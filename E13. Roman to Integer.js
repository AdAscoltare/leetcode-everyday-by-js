/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var total = 0;
  for (var i = 0; i < s.length; i++) {
    var t = s[i];
    switch (t) {
      case "I": {
          if(s[i+1]=="V"){
              total+=4;
              i++;
              break;
          }
          if(s[i+1]=="X"){
            total+=9;
            i++;
            break;
          }
          total+=1;
        break;
      }
      case "V": {
          total+=5;
        break;
      }
      case "X": {
        if(s[i+1]=="L"){
            total+=40;
            i++;
            break;
        }
        if(s[i+1]=="C"){
          total+=90;
          i++;
          break;
        }
        total+=10;
        break;
      }
      case "L": {
          total+=50;
        break;
      }
      case "C": {
        if(s[i+1]=="D"){
            total+=400;
            i++;
            break;
        }
        if(s[i+1]=="M"){
          total+=900;
          i++;
          break;
        }
        total+=100;
        break;
      }
      case "D": {
          total+=500;
        break;
      }
      case "M": {
        total+=1000;
        break;
      }
    }
  }
  return total;
};
