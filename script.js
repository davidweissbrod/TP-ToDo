var tareas = []

function borrarTarea(){
    tareas = document.getElementById("lista")
    for(var i = 0; i < tareas.length; i++){
        var span = document.createElement("SPAN")
        var txt = document.createElement("\u00D7")
        span.className = "cerrar"
        span.appendChild(txt)
        tareas[i].appendChild(span)
    }
}

function esconderTarea(){
    var cerrar = document.getElementById("cerrar")
    for(var i = 0; i < cerrar.length; i++){
        cerrar[i].onclick() = function(){
            var div = this.parentElement;
        }
    }
}

function checkTarea(){
    var lista = document.querySelector("ul", check(ev))
    lista.addEventListener('click')
}

function check(ev){
    if(ev.target.tagName === 'li'){
        ev.target.classList.toggle('checked')
    }
}

function añadirTarea(){
    var li = document.createElement('li')
    var value = document.getElementById('tarea').value
    var txt = document.createTextNode('inputValue')
    li.appendChild(txt)
    if (inputValue === '') {
        alert("Tenes que escribir algo")
    } else {
        document.getElementById("list").appendChild(li)
    }
    document.getElementById("tarea").value = ""
}

