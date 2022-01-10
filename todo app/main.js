/*
1) once you click add , the input value gets added  to the dom with the cancel button.
2) click on cancel button to remove the element for the dom.
3) store in todo's in an array.
4) store the todos in local storage.
*/

const elements = {
      addButton: document.querySelector('.button-add'),
      cancelButton: document.querySelector('.delete'),
      todoItem: document.querySelector('.main-input'),
      todoContainer : document.querySelector('.todo-list')
}


 todoArr = []


let addTodoToDom = (value) => {

      let todo =
      `
        <span class="goal">
                 <li>${value}</li>
                 <i class=" delete ri-close-circle-line"></i>
        </span>
      
      `
     

      elements.todoContainer.insertAdjacentHTML("beforeend", todo)
    
      todoArr.push(todo)

      
      localStorage.setItem("todos", JSON.stringify(todoArr))
     
}

      
     
parsedTodoArr = JSON.parse(localStorage.getItem("todos"))

      


function renderTodo() {
      

      parsedTodoArr.forEach(el => { 
            elements.todoContainer.insertAdjacentHTML('beforeend' , el)
            
      });
}




// elements.cancelButton.addEventListener('click', function () {
      
// })

if (parsedTodoArr) {
      todoArr = parsedTodoArr;
}

let init = function () {
      
      document.addEventListener('keypress', event => {
            if (event.keyCode === 13 || event.which === 13) {
                   addTodoToDom(elements.todoItem.value)
                 
                   
                  elements.todoItem.value = ''
                
                  
            }
      })
      elements.addButton.addEventListener('click', function () {
           
       
            addTodoToDom(elements.todoItem.value)
             


            elements.todoItem.value = ''
         
    

     
      
      })
    

      renderTodo()    
}

init()
