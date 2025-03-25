const btnAdd = document.querySelector('#btn-add')
let arrayTareas = []
var i = 0;
btnAdd.addEventListener("click", () => {
let tiempoActual = Date.now()
let tiempoActualHecho = new Date(tiempoActual)
let dia = tiempoActualHecho.getDate(); 
let mes = tiempoActualHecho.getMonth() + 1; 
let año = tiempoActualHecho.getFullYear(); 
let hora = tiempoActualHecho.getHours();
let minutos = tiempoActualHecho.getMinutes(); 
let segundos = tiempoActualHecho.getSeconds(); 

let fechaYHora = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;

document.querySelector(".tab-content").innerHTML = ""

    arrayTareas.push({
        nombre: document.querySelector(".form-control").value,
        id: i,
        fecha : fechaYHora
    })

    document.querySelector(".form-control").value = ""

    console.log(arrayTareas)

    arrayTareas.forEach(element => {

        console.log(document.querySelector(".tab-content"))

        document.querySelector(".tab-content").innerHTML +=
            `<div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
            <ul class="list-group mb-0">
                <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">
                    <input class="form-check-input me-2" type="checkbox" value="" aria-label="..."  id ="${i}" />
                        <p class="tarea-titulo"> ${element.nombre}</p>
                        <div class = "fecha"> ${element.fecha}</div>
                </li>
            </ul>
          
        </div>`});
    i++
})


