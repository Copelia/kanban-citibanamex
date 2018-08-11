initializeFirebase();
//DOM EVENTS
document.getElementById('twitter-log').addEventListener('click', event => {
  event.preventDefault();
  twitterLogin();
});
document.getElementById('google-log').addEventListener('click', event => {
  event.preventDefault();
  googleLogin();
});
