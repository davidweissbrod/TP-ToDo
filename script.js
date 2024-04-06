let tareas = [];
let tiempoTareas = [];

function añadirTarea(){
    var ingresoTarea = document.getElementById("ingresoTarea");
    var tarea = tareaInput.value.trim();
    if (tarea != ""){
      tareas = [];
      var tiempo = new Date().getTime();
      tiempoTareas.push({
          tarea: tarea,
          tiempoCreacion: tiempo,
          completada: false,
          tiempoFinalizacion: null
        });
      tareas = tiempoTareas
      ingresoTarea.value = ""
      mostrarToDo()
    }
    else{
        alert("Tenes que ingresar algo")
    }
  }


  function mostrarToDo(){
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    tareas.forEach(tarea => {
      var li = document.createElement("li");
      var input = document.createElement("input");
      input.type = "checkbox";
      input.checked = tarea.completada;
      input.onclick = function() {
        tarea.completada = !tarea.completada;
        if(tarea.completada){
          tiempo = new Date().getTime();
          tarea.tiempoFinalizacion = tiempo;
        }
        mostrarToDo();
      };
      li.appendChild(input);
      var txt = document.createTextNode(tarea.tarea);
  
      if(tarea.completada){
        var span = document.createElement("span");
        span.className = "completed";
        span.appendChild(txt);
        li.appendChild(span);
      }
      else{
        li.appendChild(txt);
      }
      lista.appendChild(li);
    });
  }
  

function masRapida(){
    let tareaMasRapida = null;
    let tiempoMasRapido = Infinity;
    for(var i = 0; i < tareaMasRapida.length; i++){
      if(tarea.completada && tiempoMasRapido > (tarea.tiempoFinalizacion - tarea.tiempoCreacion)){
        tareaMasRapida = tarea;
        tiempoMasRapido = (tarea.tiempoFinalizacion - tarea.tiempoCreacion)
      }
    }
    alert("La tarea que se termino mas rapido fue " + tareaMasRapida.tarea)
}

function borrar(){
    tareas = [];
    tareasTemporal = [];
    mostrarToDo();
  }