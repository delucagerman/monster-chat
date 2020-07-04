import firebase from '@firebase/app';

require('firebase/auth');
require('firebase/firestore');

var firebaseConfig = {
	apiKey: 'AIzaSyAwHoQqBGlBgbk6k5MVXDiuLd9JRvKT8t0',
	authDomain: 'monster-chat-tutorial-5c722.firebaseapp.com',
	databaseURL: 'https://monster-chat-tutorial-5c722.firebaseio.com',
	projectId: 'monster-chat-tutorial-5c722',
	storageBucket: 'monster-chat-tutorial-5c722.appspot.com',
	messagingSenderId: '967194301771',
	appId: '1:967194301771:web:00ac081fba3e86b718c4ce',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
