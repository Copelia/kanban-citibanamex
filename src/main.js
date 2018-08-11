// funcion fetch
const url = 'https:///api/clientCredentials/oauth2/token/us/gcb';
console.log(url);

fetch(url)
.then(response => response.json())
.then((res) => {
    console.log(res);
})
//EVENTOS DEL DOM

//Login redirección

let button = document.getElementById('login');

button.addEventListener('click', (event) => {
    location.href = 'src/home.html';
})

//Drag and drop 

const allowDrop = (event) => {
    event.preventDefault();
};

const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
};

const drop = (event) => {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
};
