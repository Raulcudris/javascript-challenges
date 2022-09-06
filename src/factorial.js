
const factorial = (number) => {
  // your code here
    if(number===1 || number === 0){
      return result = 1;
    }
    else{
    let result = 1;
    for(let a = 1; a<number; a++)
    {
      result += result * a ;   
    }
  return result;  
 }
 
}
 console.log(factorial(120));

module.exports = factorial;