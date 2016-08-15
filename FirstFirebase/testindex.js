var firebase = require("firebase/app");
  require("firebase/auth");
  require("firebase/database");

  // Leave out Storage
  require("firebase/storage");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAo9jAlohHV2JucGtgV7r7BB1CPquJIQhg",
    authDomain: "testapp-2493a.firebaseapp.com",
    databaseURL: "https://testapp-2493a.firebaseio.com",
    storageBucket: "testapp-2493a.appspot.com",
  };
  firebase.initializeApp(config);
