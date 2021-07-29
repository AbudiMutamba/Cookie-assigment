// Events

let notify = () => {
    // alert('The field is in focus')
    // return false
    return 'Invent executed'
}

let ValidateInput = (input) => {
  //alert(event)
  //console.log(event.target.value)
  let value

  const ALLOWED_TYPES = ['string', 'number'] //Specify the acceptable data type of the input

  if ( !ALLOWED_TYPES.includes( typeof input)) //Compare the typeof input with the acceptable data types.
        value = input.target.value
  else
        value = input

   let result = /[a-z]/g.test(value) //Regular expression to test if the input has atleast alphabet character

   
   return result // true or false
 // return event.target.value
}

//2. Select the HTML/DOM element with the id attribute called messeage
const MESSAGE_ELEMENT = document.getElementById('messege')

// Check if the select element is not null. Other-words you're testing of th element exits in the webpage
if (MESSAGE_ELEMENT != null) {
    //Add an event listener to listen whenever the input has gone to blur mode.
    // Read more about JavaScript events

    MESSAGE_ELEMENT.addEventListener('blur', (event) => {
        let result =  ValidateInput(event)
        const ERROR_PARAGRAM = document.querySelector("#error-msg");

        if (result ===false){
           MESSAGE_ELEMENT.style.border = '1px solid #f00'
           ERROR_PARAGRAM.style.border = '1px solid range'
          
        }
        else{
        MESSAGE_ELEMENT.style.border = '1px solid #000000009'
        ERROR_PARAGRAM.style.border = 'none'
        }
    })
}

//Remove this peace of code after unit testing
// module.exports = {
//     notify,
//     ValidateInput
// }
