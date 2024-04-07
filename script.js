var tareas = []
var tareasTemporal = []

function añadirTarea(){
  var ingresoTarea = document.getElementById("ingresoTarea")
  var tarea = ingresoTarea.value.trim()
  if (tarea != ""){
    tareas = []
    console.log(tareas)
    console.log(ingresoTarea)
    var tiempo = new Date().getTime()
    tareasTemporal.push({
        tarea: tarea,
        tiempo: tiempo,
        completada: false,
        tiempoTerminado: null
      });
    tareas = tareasTemporal
    ingresoTarea.value = ""
    mostrarTarea()
  }
  else{
    alert("Tenes que escribir algo")
  }
}

function mostrarTarea(){
  var ingresoTarea = document.getElementById("ingresoTarea")
  ingresoTarea.innerHTML = ""
  document.getElementById("lista").innerHTML = ""
  tareas.forEach(tarea => {
    var li = document.createElement("li")
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = tarea.completada
    checkbox.onclick = function() {
      tarea.completada = !tarea.completada
      if(tarea.completada){
        var tiempo = new Date().getTime()
        tarea.tiempoTerminado = tiempo
      }
      mostrarTarea()
    }
    li.appendChild(checkbox);
    var txt = document.createTextNode(tarea.tarea)
    if(tarea.completada){
      var span = document.createElement("span")
      span.className = "completed"
      span.appendChild(txt)
      li.appendChild(span)
    }
    else{
      li.appendChild(txt)
    }
    lista.appendChild(li)
  })
  
}

function borrar(){
  tareas = []
  tareasTemporal = []
  mostrarTarea()
}

function masRapida() {
  var tareaMasRapida = null
  var tiempoMasRapido = Infinity
  for (var i = 0; i < tareasTemporal.length; i++) {
    var tarea = tareasTemporal[i]
    if (tarea.completada && tiempoMasRapido > (tarea.tiempoTerminado - tarea.tiempo)) {
      tareaMasRapida = tarea
      tiempoMasRapido = (tarea.tiempoTerminado - tarea.tiempo)
    }
  }
  if (tareaMasRapida !== null) {
    alert("La tarea mas rapida fue " + tareaMasRapida.tarea)
  } else {
    alert("No hay tareas completadas")
  }
}