// // EVENTOS DEL DOM
// JQuery for slide

$(document).ready(function() {
  $('.sidenav').sidenav();
});
//agregando listener para volver a home
document.getElementById('kanvan').addEventListener('click', event => {
  window.location.assign('home.html');
});
// // Drag and drop. Con arrow function se rompe

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}

// funcionalidad para botontes de collaborador
const collaborator = document.getElementById('collaborator');
const getCollaborator = () => {
  location.href = 'collabor.html';
};
collaborator.addEventListener('click', getCollaborator);
