const url = 'https:///api/clientCredentials/oauth2/token/us/gcb';
console.log(url);

fetch(url)
.then(response => response.json())
.then((res) => {
    console.log(res);
})