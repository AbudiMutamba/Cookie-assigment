// displayUser.js
'use strict';
/**
 * Unit on the Testing the DOM
 * We are pretending that we have a web page, on which a button and span tags.
 * The button has id="button" the span has id="username"
 * We want when the button is clicked the fetchCurrentUser function to be invoked. So that it return the details of the current user.
 * If the details are returned we display in the span element.
 */

const fetchCurrentUser = require('./fetchCurrentUser.js');

document.querySelector("#button").addEventListener('click',() =>{

  fetchCurrentUser(user => {
    const loggedText = `Logged ${(user.loggedIn ? 'In' : 'Out')}`;
    document.querySelector("#usernaem").innerHTML = `${user.fullName} - ${loggedText}`
  });
});