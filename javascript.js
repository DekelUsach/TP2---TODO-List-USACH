const btnAdd = document.querySelector('#btn-add')
let arrayTareas = []
var i = 0;
const btnFast = document.querySelector("#btn-fast")
const btnBorrar = document.querySelector("#btn-borrar")

btnAdd.addEventListener("click", (event) => {
    if (document.querySelector(".form-control").value != "") {
        let tiempoActual = Date.now()
        
        let fechaYHora=  SacarFechaActual(tiempoActual)




        document.querySelector(".tab-content").innerHTML = ""

        arrayTareas.push({
            nombre: document.querySelector(".form-control").value,
            id: i,
            fecha: fechaYHora,
            status: 0,
            fechaTotal: tiempoActual,
            finished: null
        })
        i++;

        document.querySelector(".form-control").value = ""

        MostrarTareas();

        // Tachado
        const checkboxs = document.querySelectorAll(".form-check-input")

        checkboxs.forEach((element) => {

            element.addEventListener("change", () => {
                let titulos = document.querySelectorAll(".tarea-titulo")


                if (element.checked) {
                    titulos[element.id].style.textDecoration = "line-through"
                    let tiempo = Date.now()
                   
                    arrayTareas[element.id].finished = tiempo
                    arrayTareas[element.id].status = 1

                }
                else {
                    titulos[element.id].style.textDecoration = "none"
                    arrayTareas[element.id].status = 0
                }
               
            })
            
        })
    }
    else {
        event.preventDefault();
        document.querySelector(".tareaRapida").innerHTML = "¡Ingrese el nombre de la tarea!"
        setTimeout(() => {
            document.querySelector(".tareaRapida").innerHTML = ""

        }, 5000);
    }
})


// Mostrar tareas en pantalla
function MostrarTareas() {
    let contenido = document.querySelector(".tab-content");
    contenido.innerHTML = "";
    
    arrayTareas.forEach(element => {
        if (element.status === 0) {
            contenido.innerHTML += `
            <div class="tab-pane fade show active">
                <ul class="list-group mb-0">
            
                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">

                        <input class="form-check-input" type="checkbox" id="${element.id}" />
                        <p class="tarea-titulo" style="text-decoration: none;"> ${element.nombre}</p>
                        <div class="fecha"> ${element.fecha}</div>

                    </li>
                </ul>
            </div>`;
        }
        else {
            contenido.innerHTML += `
            <div class="tab-pane fade show active">
                <ul class="list-group mb-0">
                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">
                        <input class="form-check-input" type="checkbox" id="${element.id}" checked/>
                        <p class="tarea-titulo" style="text-decoration: line-through;"> ${element.nombre}</p>
                        <div class="fecha"> ${element.fecha}</div>

                    </li>
                </ul>
            </div>`;
        }
    });
}




// Btn fast
btnFast.addEventListener("click", () => {
    let tareasHechas = arrayTareas.filter(element => element.status === 1)
    if (tareasHechas.length > 0) {
        tareasHechas.sort((a, b) => a.finished - b.finished)
        let ultimaTarea = tareasHechas[0];

        document.querySelector(".tareaRapida").innerHTML = `La tarea que se ha hecho mas rapido es: ${ultimaTarea.nombre}`
        setTimeout(() => {
            document.querySelector(".tareaRapida").innerHTML = ""

        }, 5000);


    }
    else {
        document.querySelector(".tareaRapida").innerHTML = "No hay tareas hechas"
    }
})

// Btn borrar

btnBorrar.addEventListener("click", () => {
    let contenido = document.querySelector(".tab-content");
    arrayTareas = []
    contenido.innerHTML = ""
    i = 0
    let tareaRapida = document.querySelector(".tareaRapida")

    tareaRapida.innerHTML = "¡Se ha borrado todo correctamente!"
    setTimeout(() => {
    tareaRapida.innerHTML = ""
    }, 4000);
})


//Fecha actual
function SacarFechaActual(tiempo){
    let tiempoParseado = new Date(tiempo)
    
    let dia = tiempoParseado.getDate();
    let mes = tiempoParseado.getMonth() + 1;
    let año = tiempoParseado.getFullYear();
    let hora = tiempoParseado.getHours();
    let minutos = tiempoParseado.getMinutes();
    let segundos = tiempoParseado.getSeconds();
    let fechaYHora = 0;
    if (segundos < 10) {
        if (minutos < 10)
            fechaYHora = `${dia}/${mes}/${año} ${hora}:${minutos}:0${segundos}`;
    }
    else {
        fechaYHora = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;
    }
    return fechaYHora
}