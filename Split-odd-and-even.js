/*
Complete function splitOddAndEven, accept a number n(n>0), 
return an array that contains the continuous parts of odd or even digits.
Please don't worry about digit 0, it won't appear.

Examples:
  splitOddAndEven(123)  ===  [1,2,3]
  splitOddAndEven(223)  ===  [22,3]
  splitOddAndEven(111)  ===  [111]
  splitOddAndEven(13579)  ===  [13579]
  splitOddAndEven(135246)  ===  [135,246]
  splitOddAndEven(123456)  ===  [1,2,3,4,5,6]
*/


// Solution

function splitOddAndEven(n) {
  return (n+"").match(/[13579]+|[2468]+/g).map(x=>+x)
}

// or

function splitOddAndEven(n) {
  n = n.toString().split('');
  
  let array = [];
  let result = '';
  let lastEven = null;
  
  for (let i in n)
  {
    let even = n[i]%2 === 0;
    
    if (even === lastEven)
      result += n[i].toString();
    else
    {
      if (lastEven !== null)
        array.push(parseInt(result));
      
      lastEven = even;
      result = n[i].toString();
    }
  }
  array.push(parseInt(result));

  return array;
}