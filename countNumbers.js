function countNumbers(array, lowerbound, upperbound){
  var counter = 0;
  array.forEach(function(num){
    if(num < upperbound && num > lowerbound){
      counter++
    }
  });
  return counter
};
