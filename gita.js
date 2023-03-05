// Initialize Firebase
var config = {
  apiKey: "AIzaSyB9m7kwN-OXXx6sloFden6zMnifKenbNSg",
  authDomain: "gita-d1dc1.firebaseapp.com",
  databaseURL: "https://gita-d1dc1-default-rtdb.firebaseio.com",
  projectId: "gita-d1dc1",
  storageBucket: "gita-d1dc1.appspot.com",
  messagingSenderId: "100373059636",
  appId: "1:100373059636:web:e1f5ca9f893f5e74479261",
  measurementId: "G-GCS0DS1TDH"
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    //save message

    saveMessage(name, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, phone, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    })
}