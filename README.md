# Firebase App Not Initialized Error

This repository demonstrates a common Firebase error:  'App not initialized - you should call initializeApp() first'.  The `bug.js` file shows the erroneous code, while `bugSolution.js` provides the corrected implementation.

This error occurs when you try to use a Firebase service before the Firebase app has been initialized using `firebase.initializeApp()`.  Ensure this function is called before any other Firebase operations.