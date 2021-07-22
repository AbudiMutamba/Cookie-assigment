// There are many ways of storing data inJavaScript
// Which can be categotized into two primary categories
// 1. Client  => Cookies, Sessions, LocalSTorage
// 1. Server (Node) => SQL Databaeses e.g MySQL & NoSQL Databases Like MongoDB
// Cookies enable storage of strings in a user's browser
// We document.cookie which is part of DOM
// Cookies are stored as key/value pairs.
// Separate key/value pairs with a semi-colons: e.g username=username ; password=password

console.log(document.cookie)
// document.cookie = "Macbook Pro 2015, 16GB RAM"
// let cookieValue = document.cookie
// console.log(cookieValue)

const DECODE_COOKIE =  decodeURIComponent(document.cookie)
console.log(DECODE_COOKIE.split(";"));
// console.log(SPLIT)

// date  = new Date()

// localDate = date.toLocaleDateString()
// localTime = date.toLocaleTimeString()

// let userInfo = `userInfo=Abudi Mutamba; device=Macbook Pro 2015, 16GB RAM;`

// document.cookie = userInfo

// document.cookie = "date=" + localDate
// document.cookie = "time="  + localTime

// let userInfoStored = document.cookie
// console.log(userInfoStored)

let setGetItNowTime = () =>  {
    let now  = new Date();
    let Time = now.toTimeString();
    now.setTime(now.toTimeString() + (1 * 24 * 60 * 10000))
    let expire = now.toUTCString()
    document.cookie = `getNowClick=${time}; expires=${expire}; path=/get-it-now`;

    console.log(
        "getNowClick=" + now.toLocalTimeString() + " ; expiry=Wed, 21 July 2021 12:00:00 UTC; path=/get-it-now"
    );
}

// Quiz : Write a program that stores a cookie which will expire 20 days after it's creation and make sure it's http only

//2.sessionStorage
//Session storage is used to store a data at the active state of the web page.
//Like cookies, sessionStorage is also a key/value pair but difference is in the use of a sessionStorage function and we can't set expiry time for the sessionStorage data.
//Once the web page is closed the data stored with sessionStorage is removed/deleted unless it's set whenthe page is reloaded.

sessionStorage.setItem('name', 'David')
sessionStorage.setItem('towns', 'Kansanga')
sessionStorage.setItem('town', 'Bunga')

// sessionStorage.removeItem('name', 'David')
// sessionStorage.removeItem('town')

let myName = sessionStorage.grtItem('name')
console.log(myName)

//3.LocalStorage
// It is quite similar to seted in the sessionStorage but here the data is persisted in the user's browser even when it get's closed. So whenever you visit the same website that set the localstorage the data will be available until explicitly deleted.

locaStorage.setItem('name','Mutamba Abudi')
locaStorage.removeItem('name')
locaStorage.setItem('city','Kampala')
let city = localStorage.getItem('city')
console.log(city)
localStoragae.setItem('city','Nairobi')

city = localStorage.getItem('city');
console.log(city)


// How can we store more values in on ekey 
// Imagine you have a key called invoice and you to store invoice about it.
// Such as the invoice number, amount, items
// We introduce JSON.

// let invices  = [
//     {
//         "id": 450,
//         "to": "Jess REabourn",
//         "from": "Davdi Wampamba",
//         "items": [
//             {
//                 "name": "Home page",
//                 "desc":  "Home page redesign",
//                 "amount": "$145"
//             },
//             {
//                 "name": "Survey Form",
//                 "desc":  "The servry for 2021 Expanded ",
//                 "amount": "$145"
//             },
            
//         ]
//     }
// ]
