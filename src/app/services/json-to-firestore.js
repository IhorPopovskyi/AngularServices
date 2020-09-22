const firebaseConfig = {
    // TODO-6
    apiKey: "AIzaSyCtsgIkFb1wCgKzbw-iCnCxyxvwnrGavQ0",
    authDomain: "albums-7e8e7.firebaseapp.com",
    databaseURL: "https://albums-7e8e7.firebaseio.com",
    projectId: "albums-7e8e7",
    storageBucket: "albums-7e8e7.appspot.com",
    messagingSenderId: "1077804859852",
    appId: "1:1077804859852:web:d5a9a796c1c7ff22de9d69",
};
const albums = require("./albums.json");
const firebase = require("firebase");

require("firebase/firestore");
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

albums.forEach(function (obj) {
    db.collection("albums")
        .add({
            name: obj.name,
            band: obj.band,
            genre: obj.genre,
            label: obj.label,
            producer: obj.producer,
            releaseDate: new Date(obj.releaseDate),
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});
