
 function myCookieFunction () {
   let today_Date = document.getElementById('myinput')
    let date = new Date();
     let expire = date + 90
     document.cookie= ` DA=${today_Date}; expires=${expire}`
    //  let cookieValue = document.cookie
    //    console.log(cookieValue)
    }
  
