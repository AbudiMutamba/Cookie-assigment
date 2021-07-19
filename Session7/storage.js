// There are many ways of storing data inJavaScript
// Which can be categotized into two primary categories
// 1. Client  => Cookies, Sessions, LocalSTorage
// 1. Server (Node) => SQL Databaeses e.g MySQL & NoSQL Databases Like MongoDB
// Cookies enable storage of strings in a user's browser
// We document.cookie which is part of DOM
// Cookies are stored as key/value pairs.
// Separate key/value pairs with a semi-colons: e.g username=username ; password=password

document.cookie = "Macbook Pro 2015, 16GB RAM"
let cookieValue = document.cookie
console.log(cookieValue)

date  = new Date()
localDate = date.toLocaleDateString()
localTime = date.toLocaleTimeString()

let userInfo = `userInfo=Abudi Mutamba; device=Macbook Pro 2015, 16GB RAM;`


document.cookie = userInfo

document.cookie = "date=" + localDate
document.cookie = "time="  + localTime

let userInfoStored = document.cookie
console.log(userInfoStored)