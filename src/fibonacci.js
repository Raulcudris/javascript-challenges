const fibonacci = (n) => {
  // your code here
  let array = [];
  array [0] = 1;
  if(n===1){
    return array;
  }
  array [1] = 1;
  if(n===2){
    return array;
  }else{
    for (let i = 2; i < n; i++) {
      array[i] = array[i - 2] + array[i - 1];
    }
    return array;
  } 
}

console.log(fibonacci(6));

module.exports = fibonacci;