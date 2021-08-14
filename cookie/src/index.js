
 function myCookieFunction () {
   let today_Date = new Date()
     today_Date.setDate(today_Date.getDate() + 90)
     let expire =  "expires=" + today_Date.toUTCString();
     document.cookie= ` DATE=${today_Date}; expires=${expire}; path=/Enter-Country`
     let cookieValue = document.cookie
       console.log(cookieValue)
    }
  
