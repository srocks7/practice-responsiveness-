import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCIpgGLXImSvZEdQZZL7HS00ZDzVXQSCqU",
    authDomain: "portfolio-feedback.firebaseapp.com",
    databaseURL: "https://portfolio-feedback.firebaseio.com",
    projectId: "portfolio-feedback",
    storageBucket: "portfolio-feedback.appspot.com",
    messagingSenderId: "696467651005",
    appId: "1:696467651005:web:07e12c505ec5380a0ffad4"
  };
 
  var fire=firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  export  {
    storage, fire as default
  }