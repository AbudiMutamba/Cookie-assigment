//Start a node  server that listens via the https protocol

const HTTP = require('http')

require('dotenv').config()

const HOSTNAME = '127.0.0.1'
const PORT = process.env.PORT || 8890
const SERVER = HTTP.createServer((request,response)=> {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')

    let { APP_NAME } = process.env

    response.end(`${APP_NAME}\n ${process.env.PUBLIC_KEY}`)
})

SERVER.listen(PORT, HOSTNAME, () => { 
    console.log(`The server is running at ${HOSTNAME} : ${PORT}`)

    process.on("SIGTERM", () => {
        SERVER.close(() => {
            console.log(`${process.pid} Server connection closed`);
        });
    });
})
const readline = require ("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Enter Quit|quit|q|Q to close connection \n`, (input) => {
    let accepted = ["Quit", "quit", "q", "Q"];
    accepted.includes(input) ? process.kill(process.pid, "SIGTERM") : console.log(`You entered ${input}`)
})

// readline.question(`What's your name?`,name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
// })