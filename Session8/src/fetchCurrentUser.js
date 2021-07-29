let parseJSON = user => {
    return{
        fullname: `${user,firstname} ${user.lastname}`,
        loggedIn: true,
    }
}

let fetchCurrentUser = callback => {
    return fetch("http://exmaple.com/currentUser")
           .then(response => response.json())
           .then(data => callback (parseJSON(data)));
}

module.exports = fetchCurrentUser;