
const TABLE_DATA = document.getElementById('table-data')

let generatedHTMLRows = ''

/**
 * Read this resource https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * Explain the fetch() function
 */
//Explain the fetch() function
fetch('https://jsonplaceholder.typicode.com/todos') 
  .then(response => response.json())
  .then(json => {
      let todos = json

      if (todos && todos.length > 0) {
          todos.forEach(todo => { //Explain this block of code
          /**
           * At every iteration the todo is like below
           * todo = {'userId':1, 'id': 1, 'title': 'title', 'complete': 'false'}
           */
              generatedHTMLRows +=`
               <tr>
                  <td>${todo.id}</td>
                  <td>${todo.userId}</td>
                  <td>${todo.title}</td>
                  <td>${todo.completed ? "Completed" : "Incomplete"}
                  </td>
               </tr>
              `;// Explain this block of code
          })
      }
  
  TABLE_DATA.innerHTML = generatedHTMLRows;
  //console.log(json)
})
.catch( err => console.log(err));