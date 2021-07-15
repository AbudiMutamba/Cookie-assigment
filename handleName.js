let handleName = (name) => {
 
    //Do not hand more than one name. We know that names are separated by a space.
    let nameChunks = name.split(" ")
    //Check if the nameChucks is an object which is also an array in JavaScript and return out of the code
    if(typeof nameChunks === 'object' && nameChunks.length > 1) return false

    //Use string.charAt(index) to get the first letter of the string which is name
    //Then chain to UpperCase() to convert the given letter to uppercase
    let firstLetterToUpperCase = nameChunks[0].charAt(0).toUpperCase()

    //Use string.slice(start,end) to extract remaining letters from the given string which is name
    let otherLetters = nameChunks[0].slice(1) //string.slice(1) returns all the letters after the letter at index 0
    
    //Then chain toLowerCase() to transofrm the reamining character to lowercase
    let otherLettersToLetterCase = otherLetters.toLowerCase()

    //Concatenate the first letter which in uppercase to othes which are in lowercase at this level and assign to the name
    let newName = `${firstLetterToUpperCase}${otherLettersToLetterCase}`

    //Return the new name
    return newName
}

module.exports = handleName

console.table(handleName("David")) // 0 => David
console.table(handleName("David Wampamba")) //false
 