
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
     
      if (!value == '') {
            
      elements.todoContainer.insertAdjacentHTML("beforeend", todo)
    
      todoArr.push(todo)
            
      }
      
      localStorage.setItem("todos", JSON.stringify(todoArr))
     
}

      
     
parsedTodoArr = JSON.parse(localStorage.getItem("todos"))

elements.todoContainer.addEventListener('click', function (e) {
      
      let event = e.target.closest('.delete').parentNode;
     
      let arrIndex
      
      arrIndex = todoArr.findIndex((el) => {
            return el.includes(`${event.innerHTML}`)
      })
      
      todoArr.splice(arrIndex, 1)
      
      localStorage.setItem("todos", JSON.stringify(todoArr))
      
      parsedTodoArr = JSON.parse(localStorage.getItem("todos"))

      event.parentNode.removeChild(event)

})

function renderTodo() {
      
      parsedTodoArr.forEach(el => { 
            elements.todoContainer.insertAdjacentHTML('beforeend' , el)
            
      });
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


