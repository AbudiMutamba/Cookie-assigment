const INQUIRER = require("inquirer");

const QUESTIONS = [
    {
        type: 'input',
        name: 'name',
        message:'Username'
    },
    {
        type: 'password',
        name: 'password',
        message: 'Password'
    }
]
const PASSWORD = '12345'
INQUIRER.prompt(QUESTIONS).then((answers) => {
    //console.log(`Hi ${answers["name"]}!`);
    let { name, password } = answers

    if(password == PASSWORD)
        console.log(`Hi ${name} you've successfully logged in.`);
    else 
        console.log(`Hi ${name}, check your password!`);
         
})