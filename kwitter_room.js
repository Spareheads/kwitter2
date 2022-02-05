const firebaseConfig = {
      apiKey: "AIzaSyCUHG9z2rmCABCfXCcZgxnxkkxDW5KIbtY",
      authDomain: "kwitter-154f7.firebaseapp.com",
      databaseURL: "https://kwitter-154f7-default-rtdb.firebaseio.com",
      projectId: "kwitter-154f7",
      storageBucket: "kwitter-154f7.appspot.com",
      messagingSenderId: "309686173696",
      appId: "1:309686173696:web:f0b33901f190c85bf758e5",
      measurementId: "G-FNXCMTXD78"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
