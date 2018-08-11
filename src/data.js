// Initialize Firebase //
window.initializeFirebase = () => {
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyAiAsGQvnKAXSnwwTQJV71ua8V2uE9EM00',
    authDomain: 'ux-kanban-citybanamex.firebaseapp.com',
    databaseURL: 'https://ux-kanban-citybanamex.firebaseio.com',
    projectId: 'ux-kanban-citybanamex',
    storageBucket: 'ux-kanban-citybanamex.appspot.com',
    messagingSenderId: '357015167261'
  });
};
//Function for Twitter Login:
window.twitterLogin = () => {
  let provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().useDeviceLanguage();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      location.href = 'views/newsfeed.html';
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('El correo ya ha sido registrado');
      }
      // ...
    });
};
//function login google

window.googleLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().useDeviceLanguage();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      location.href = 'views/newsfeed.html';
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('El correo ya ha sido registrado');
      }
      // ...
    });
};
