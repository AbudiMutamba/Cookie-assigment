//Accepting CLI arguments in Node
//To provide the CLI argument at the CLI/Terminal use the following sytnax
//node filename arg1 arg2 arg3 .... argN
//Then from your node use the process.argv to access all the arguments
//In the code closely look at line 13 to 20 which outputs the CLI arguments to the webpage
//and line 26 to 31 which output the CLI argumets to the console.

const HTTP = require('http')
// const { argv } = require('node:process')
require('dotenv').config()
const { HOSTNAME, PORT } = process.env

const SERVER = HTTP.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    
        let  { argv } = process;
        args = require('minimist')(argv.slice(2)) //You need to use require the minimist package to be able to acess name arguments
        //To name the argument you pass it like 
        //node filename --key=value
        //console.log(argv)

        let html = ''
        html = args ['school']
        html += '</br>' + args['course']
        // if(argv.length > 0) {
        //     argv.forEach((name) => {
        //         html += `<pr>${ name }</p>`;
        //     });
        // }

        response.end(`<h1>Server running!<h1> ${html}`)
})
SERVER.listen (PORT, HOSTNAME, () => {
    console.log(`This server is running at ${PORT} ${HOSTNAME}`)
    const { argv } = process

        if (argv.length > 0){
            argv.forEach(name => {
            console.log(name)
            })
        }
})