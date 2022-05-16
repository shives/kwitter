const firebaseConfig = {
      apiKey: "AIzaSyCZA8GVV1ztwbe8X_4IO6cEir_BislbL1s",
      authDomain: "kwitter-7695a.firebaseapp.com",
      databaseURL: "https://kwitter-7695a-default-rtdb.firebaseio.com",
      projectId: "kwitter-7695a",
      storageBucket: "kwitter-7695a.appspot.com",
      messagingSenderId: "934286577008",
      appId: "1:934286577008:web:4e90a54d6b5196c68813b5"
    };
    
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });

       localStorage.setItem("room_name" , room_name);
       window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout () {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}