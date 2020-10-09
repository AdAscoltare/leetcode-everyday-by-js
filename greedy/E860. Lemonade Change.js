/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  var money_5 = 0;
  var money_10 = 0;
  for (var i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5: {
        money_5++;
        break;
      }
      case 10: {
        money_5--;
        if (money_5 < 0) {
          return false;
        }
        money_10++;
        break;
      }
      default: {
        if (money_10 > 0) {
          money_10--;
          money_5--;
        } else {
          money_5 -= 3;
        }
        if (money_10 < 0 || money_5 < 0) {
          return false;
        }
        break;
      }
    }
  } //end for
  return true;
};
