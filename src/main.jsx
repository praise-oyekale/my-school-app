import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
    
  </StrictMode>,
)


// Import the services exported from your firebase.js file
// import { auth, db } from './firebase.js';

// function testFirebaseConnection() {
//   console.log("=== FIREBASE SETUP TEST ===");

//   // 1. Check if .env environment variables are loaded correctly
//   const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
//   const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;

//   if (!apiKey || !projectId) {
//     console.error("❌ ERROR: .env keys are missing or undefined! Check your file placement and restart your dev server.");
//     return;
//   } else {
//     console.log("✅ .env keys loaded successfully for project:", projectId);
//   }

//   // 2. Check if Firebase Auth is initialized
//   if (auth) {
//     console.log("✅ Firebase Auth is initialized successfully.");
//   } else {
//     console.error("❌ ERROR: Firebase Auth failed to initialize.");
//   }

//   // 3. Check if Firestore Database is initialized
//   if (db) {
//     console.log("✅ Firestore Database is initialized successfully.");
//   } else {
//     console.error("❌ ERROR: Firestore Database failed to initialize.");
//   }
// }

// // Run the test function
// testFirebaseConnection();