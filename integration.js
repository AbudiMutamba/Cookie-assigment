let firstName  = (name = '') => {
    return  name
}

let fullName  = (first_name = '', last_name = '') => {
    return  first_name + ' ' + last_name;
}

module.exports = {
    firstName,
    fullName
}
