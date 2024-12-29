const inputBoxBtn = document.getElementById('inputBox')
const listContainer = document.getElementById('listContainer')
const addTodoBtn = document.getElementById('addTodoBtn')

addTodoBtn.addEventListener('click',addTask)

function addTask()
{
    if(inputBoxBtn.value === ""){
        alert("PLEASE ENTER ANY TEST")
    }

    else {
        let li = document.createElement("li")
        li.innerHTML = inputBoxBtn.value
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBoxBtn.value = ""
    saveData()
}
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML)
}
function showData()
{
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()
