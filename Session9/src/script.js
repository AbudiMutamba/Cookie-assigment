
const TABLE_DATA = document.querySelector('#table-data')
const PAGINATION = document.querySelector('#pagination')
let generatedTableRows = ''

document.body.addEventListener('click', (event) => { //Eveny delegation
    // console.log(event.target.dataset.page)
    if (event.target.dataset.page){
        let { page } = event.target.dataset;
        retrieveWithPagination(page)
        //console.log(page)
    }
})

/**
 * Read this resource https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * Explain the fetch() function
 */
//Explain the fetch() function

let todos = []

let retrieveWithPagination = (page = 1) => {
    let buttons = "";

     fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {

        // console.log(json.length)
        // Generate pagination
        let numberOfItemsPerPage = 10;
        const MAX_PAGES = Math.floor(json.length / numberOfItemsPerPage);
        let index = page;
        
        todos = json.slice(index - 1, numberOfItemsPerPage);
        let i = 1;

        while (i < MAX_PAGES) {
            //Generate buttons
            buttons += `<button data-page="${i}" >${i}<button>`
            i++;
        }
      }).then(() => {

        if (todos && todos.length > 0) {
       //check whether there some todos

        todos.forEach((todo) => { //Explain this block of code
          /**
           * At every iteration the todo is like below
           * todo = {'userId':1, 'id': 1, 'title': 'title', 'complete': 'false'}
           */
          let {id, userId, title, completed } = todo;

           fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`) 
           .then(response => response.json()) // Convert response to json 
           .then ( (user) => { // Get the converted the json
             let { name } = user;

              generatedTableRows +=`
               <tr>
                  <td>${id}</td>
                  <td>${name}</td>
                  <td>${title}</td>
                  <td>${completed ? "Completed" : "Incomplete"}
                  </td>
               </tr>
              `;// Explain this block of code
           })
           .then(() =>{
                TABLE_DATA.innerHTML += generatedTableRows;
                PAGINATION.innerHTML
           })
           .catch((err) => console.log(err));
        });
    }
  })
  .catch((err) => console.log(err));
}

retrieveWithPagination()