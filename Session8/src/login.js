let doLoginOnSubmit = (event) => {
    event.preventDefault()

    const USERNAME =  document.querySelector('#username')
    const PASSWORD =  document.getElementById('password').value

    const FORM = document.getElementById('Login')

    console.log(USERNAME.value, PASSWORD)

    return false
}

let doLoginOnClick = () => {
   
    const USERNAME =  document.querySelector('#username').value
    const PASSWORD =  document.getElementById('password').value
    
    const FORM = document.getElementById('Login')

    //Here you can use the JavaScript fetch or axies library to pass the information the API

    if(USERNAME == '' || PASSWORD == '') {
        alert('All fields are required')
        return false
    }
    
    console.log(USERNAME, PASSWORD)
    
    let userInfo =  {
        'username' : USERNAME,
        'password' : PASSWORD
    }

    let userInfoJSON =JSON.stringify(userInfo)
    localStorage.setItem('user', userInfoJSON)

    alert('Login successful')

    document.getElementById("Login").reset();
    // document.getElementById('Login').submit();
    // document.getElementById('username').value = ''
    // document.getElementById('password').value = ''

    return true;
}
// module.exports ={
//     doLogin
// }
