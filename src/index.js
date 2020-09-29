exports.min = function min (array) {
if(typeof(array) == 'undefined' || array.length == 0 || !array) return 0;
else  return Math.min(...array);
}

exports.max = function max (array) {
  if(typeof(array) == 'undefined' || array.length == 0 || !array) return 0;
  else  return Math.max(...array);

}

exports.avg = function avg (array) {
  if(typeof(array) == 'undefined' || array.length == 0 || !array) return 0;
  else {return array.reduce((one, two) => (one + two)) / array.length;}
}
