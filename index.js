'use strict';

module.exports = function(afm) {
  var AFM_REGEX = /^[0-9]{9}$/;
  if (!AFM_REGEX.test(afm) || afm === '000000000') {
    return false;
  }
  var m = 1;
  var sum = 0;
  for (var i = 7; i >= 0; i--) {
    m *= 2;
    sum += afm.charAt(i) * m;
  }
  return sum % 11 % 10 === parseInt(afm.charAt(8), 10);
};
