
const TABLE_DATA = document.querySelector('#table-data')
const PAGINATION = document.querySelector('#pagination')
let PER_PAGE = document.querySelector('#per_page')

let per_page = parseInt(PER_PAGE.value) || 10;

PER_PAGE.onblur = () => {
  per_page = parseInt (PER_PAGE.value);
  retrieveWithPagination (1, per_page);
}

document.body.onclick = (event) => {
// document.body.addEventListener('click', (event) => { //Eveny delegation
    // console.log(event.target.dataset.page)
    if (event.target.dataset.page){
        let { page } = event.target.dataset;
        per_page = parseInt(document.querySelector("#per_page").value) || per_page;
        // let per_page = 10;
        // retrieveWithPagination(page)
        //console.log(page)
        retrieveWithPagination(page, per_page)
    }
}//)

/**
 * Read this resource https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * Explain the fetch() function
 */
//Explain the fetch() function

let todos = []

let retrieveWithPagination = (page = 1, numberOfItemsPerPage = 10) => {
    let buttons = "", generatedTableRows = "";

     fetch("https://jsonplaceholder.typicode.com/todos") //Retrive todos
      .then((response) => response.json())
      .then((json) => {

        // console.log(json.length)
        // Generate pagination
        // let numberOfItemsPerPage = 10;
        const MAX_PAGES = Math.floor(json.length / numberOfItemsPerPage);
        let START_POSITION = (page - 1) * numberOfItemsPerPage;
        
        todos = json.slice(START_POSITION).slice(0, numberOfItemsPerPage);

        let i = 1;

        while (i <= MAX_PAGES) {
            //Generate buttons
            buttons += `<button data-page="${i}" >${i}</button>`
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
                  <td>
                    <div 
                      class="btn-group" role="group" aria-label="Basic example">
                      <button onClick="todoDelete(${id})" class="btn btn-danger">Delete</button>
                      <button onClick="todoEdit(${id})" class="btn btn-info">Edit</button>
                    </div>
               </tr>
              `;// Explain this block of code
           })
           .then(() =>{
                TABLE_DATA.innerHTML = generatedTableRows;
                PAGINATION.innerHTML = buttons
           })
           .catch((err) => console.log(err));
        });
    }
  })
  .catch((err) => console.log(err));
}

retrieveWithPagination()

const TODO_FORM = document.querySelector('form#new-todo')

if (TODO_FORM != 'undefined') {
  let title = ''
  TODO_FORM.addEventListener('submit', event => {
    event.preventDefault()

    title = event.target[0].value;

    if(!validate(title)) {
      return
    }

       sendTodoToAPI(title)
  })
}

let sendTodoToAPI = (title) => {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.json())
  .the(json => {
    let {id} = json
    if(id) {
      TODO_FORM.reset()
     // TODO_FORM.classList.add('was-validated')
      document.getElementById('todo-id').innerHTML = id
      //document.getElementById('title').value = ''
      document.getElementById('todo-alert').classList.
      remove('d-none').add('d-block')
    }
  })
  .catch(error => console.log(error))
};

let todoDelete = todoID => {
  let confirmation = confirm(`Are you sure you want to delete item #${todoID}`)
  if(!confirmation) return
  //console.log(confirmation)

  fetch(`https://jsonplaceholder.typicode.com/todos/${todoID}`, {
   method: 'DELETE',
  })
    .then((response) => response.json())
    .then((json) => retrieveWithPagination())
    //.then((json) => console.log(json))
    .catch((error) => console.log(error));
}

let todoEdit = todoID => {
  /**
   * 
   */
  console.log(todoID)
}


function validate(title) {
  return (title == 'undefined' || title.length < 3 ) ? false : true
}

(() => {
  "use strict";
  
  //Fetch all the forms we want to apply custom Bootstrap validation styles to 
  const FORMS = document.querySelectorAll(".needs-validation");

  //loops over them and prevent submission
  Array.prototype.slice.call(FORMS).forEach(
    (FORM) => {
      FORM.addEventListener(
      "submit",
      (event) => {
        if (!FORM.checkValidity()){
          event.preventDefault();
          event.stopPropagation();
        }
       FORM.classList.add("was-validated");
      },
      false
    );
  });
}) ();