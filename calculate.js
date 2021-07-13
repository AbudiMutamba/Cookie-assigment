let sum = (num1, num2)  => {
   //if (typeof a == 'undefined') return false
   //if (typeof b == 'undefined') return false
   if(typeof num1 != 'number' || typeof num2 != 'number')  return false


   //return a + b
   return num1 + num2
}

let substract = (num1, num2) =>{
   if(typeof num1 != 'number') return false
   if(typeof num2 != 'number') return false
   return num1 - num2
}
//onsole.log(sum(5, 9))
//console.log(sum(o,9)) //This can be very hard to troubleshoot becuse the sytem compiler won't return
//console.log(sum(10, '90'))


//module.eports = sum
//Exports more than one function
module.exports = {
   sum,
   substract
}
