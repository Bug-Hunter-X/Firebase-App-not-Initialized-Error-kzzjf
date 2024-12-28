The solution is to ensure that `firebase.initializeApp()` is called before any other Firebase functions are used.  The initialization should typically happen early in your application's lifecycle, often in your main entry point.

```javascript
// Import the Firebase SDK
import * as firebase from 'firebase/app';
import 'firebase/auth'; // Import necessary modules
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  // ... your Firebase config
};
firebase.initializeApp(firebaseConfig);

// ... rest of your code

//Now you can use Firebase services safely
firebase.auth().onAuthStateChanged((user) => {
  // ...
});

firebase.firestore().collection('myCollection').get().then((querySnapshot) => {
  // ...
});
```
Make sure to replace `// ... your Firebase config` with your actual Firebase configuration details.