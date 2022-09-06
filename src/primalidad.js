const trialDivision = (number) => {
  // your code here
  let primo = false;
  if(!Number.isInteger(number) ){
    return primo = false;
  }
  if( number === 2 ){
     return primo = true;
  }
  else{
      for(let i= 2; i<number; i++ ){
        primo = true;
        if( number % i == 0)
        {
          return primo = false;
        }
      }
  }
  return primo;
}
console.log(trialDivision(7));



module.exports = trialDivision;