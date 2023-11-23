//Variables

let inputItem = document.querySelector("#item");
let botonAgregar = document.querySelector("#agregar");
let inputTarea = document.querySelector("#input-tarea")

let item = document.querySelector(".container");


class Item {
   constructor(tarea) {
      this.crearDiv(tarea);
   }

   crearDiv(tarea) {
      //Crear el div
      let divItem = document.createElement("div");
      divItem.classList.add("item");
      //Crear el input y sus atributos
      let inputItem = document.createElement("input");
      inputItem.type = "text";
      inputItem.disabled = true;
      //Agregar la clase al item
      inputItem.classList.add("item-input");
      //El valor del input de item se guarda en una variable
      inputItem.value = tarea;
      //Se crea el boton editar, se le asigna un icono y se le agrega una clase
      let botonEditar = document.createElement("button");
      botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
      botonEditar.classList.add("boton-editar");
      //Se crea el boton borrar, se le asigna un icono y se le agrega una clase
      let botonRemover = document.createElement("button");
      botonRemover.innerHTML = '<i class="fa-solid fa-trash"></i>';
      botonRemover.classList.add("boton-remover");
      // Se agrega el div, el input, el boton editar y remover al body
      item.appendChild(divItem);
      divItem.appendChild(inputItem);
      divItem.appendChild(botonEditar);
      divItem.appendChild(botonRemover);

      //Se genera una variable auxiliar para el estado del disable 
      let estaEditando = false;

      botonEditar.addEventListener("click", function () {
         if (estaEditando) {
            // Si está editando, deshabilita el input y cambia el ícono
            inputItem.disabled = true;
            botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
         } else {
            // Si no está editando, habilita el input y cambia el ícono
            inputItem.disabled = false;
            botonEditar.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
         }
      
         // Cambia el estado de edición
         estaEditando = !estaEditando;

      });

      botonRemover.addEventListener("click", function () {
         divItem.remove();
        
      });
      
   }


}

function chequearInput (tarea) {
   if (tarea != "") {
      let item = new Item(tarea);
      inputTarea.value = "";
   }
} 

botonAgregar.addEventListener("click", function () {
   // Tarea debe valer lo que hay en este momento en el input
      let tarea = inputTarea.value;
    chequearInput (tarea);
   

});


 








