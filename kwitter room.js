// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Jz6HLwD_2PyXfWVxMT1X1lcwQ4ZKx5I",
  authDomain: "greetingbot-dbnr.firebaseapp.com",
  databaseURL: "https://greetingbot-dbnr-default-rtdb.firebaseio.com",
  projectId: "greetingbot-dbnr",
  storageBucket: "greetingbot-dbnr.appspot.com",
  messagingSenderId: "949662976736",
  appId: "1:949662976736:web:ea0f34a93f12b68ffd9e85"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("user_name").innerHTML = "Welcome " + localStorage.getItem("user_name") + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML });
      Room_names = childKey;
//Start code
  console.log("room name - " + Room_names);
  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)>#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
  console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id=" + firebase_id + " value=" + like + " onclick='updateLike(this.id)'>";
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: " + like + "</spsn></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
//End code
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
