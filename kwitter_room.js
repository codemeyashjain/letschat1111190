
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAfPXuEnoblw8-dwvCiJ2jRTVjEBM9dRfs",
    authDomain: "kwitterbetterthantwitter.firebaseapp.com",
    databaseURL: "https://kwitterbetterthantwitter-default-rtdb.firebaseio.com",
    projectId: "kwitterbetterthantwitter",
    storageBucket: "kwitterbetterthantwitter.appspot.com",
    messagingSenderId: "699764188849",
    appId: "1:699764188849:web:e06cfef9a5d3118bc6e490"
  };
  
  // Initialize Firebase
   initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
  { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) 
    { 
      childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML = row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }