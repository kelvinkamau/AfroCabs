var config = {
    apiKey: "AIzaSyAS_tVZWvxRnHS8dIa73RiWOQMYxGy3rEo",
    authDomain: "afro-cabs.firebaseapp.com",
    databaseURL: "https://afro-cabs.firebaseio.com",
    projectId: "afro-cabs",
    storageBucket: "afro-cabs.appspot.com",
    messagingSenderId: "545471793211"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');
document.getElementById('chatForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    let name = getInputVal('name');
    let email = getInputVal('email');
    let message = getInputVal('message');

    saveMessage(name, email, message);
    document.getElementById('chatForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}