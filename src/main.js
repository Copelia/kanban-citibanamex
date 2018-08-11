// // EVENTOS DEL DOM

// // Login redirección

let button = document.getElementById('login');

button.addEventListener('click', (event) => {
  location.href = 'src/home.html';
});

// // Drag and drop. Con arrow function se rompe


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
