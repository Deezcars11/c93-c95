
var firebaseConfig = {
      apiKey: "AIzaSyBzv1g4dAE-O3Zv0NRiAxMXz4YfsKhE1f0",
      authDomain: "kwitter-c4e12.firebaseapp.com",
      databaseURL: "https://kwitter-c4e12-default-rtdb.firebaseio.com",
      projectId: "kwitter-c4e12",
      storageBucket: "kwitter-c4e12.appspot.com",
      messagingSenderId: "376999510228",
      appId: "1:376999510228:web:a6fccb5ee6af65f9c1bb41",

    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 function addRoom()
 {
      room_name= document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      ;
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row= "<div class = 'room_name' id= "+ Room_names +"onclick = 'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";      
}