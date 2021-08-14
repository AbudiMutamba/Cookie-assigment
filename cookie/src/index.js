
 function myCookieFunction () {
   let today_Date = document.getElementById('myinput')
    
     let expire =  "expires=" + (today_Date.Date() + 90)
     document.cookie= ` DA=${today_Date}; expires=${expire}`
    //  let cookieValue = document.cookie
    //    console.log(cookieValue)
    }
  
