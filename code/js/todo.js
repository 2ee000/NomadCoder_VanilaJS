const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement; // 이벤트발생.해당객체지정.부모태그지정
    li.remove(); // li 삭제
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo; // newTodo를 span 안에 내용으로 넣음
    const button = document.createElement("button");
    button.innerText = "❌"; // x를 button안에 내용으로 넣음
    button.addEventListener("click", deleteToDo); // button이 클릭되면 deleteTodo실행
    li.appendChild(span); // span을 li의 자식으로 넣음
    li.appendChild(button); // button울 li의 자식으로 넣음
    toDoList.appendChild(li); // li를 toDoList의 자식으로 넣음
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // toDoInput을 빈칸으로 만들어줌
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);