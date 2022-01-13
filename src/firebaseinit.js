import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  isSupported,
  onMessage,
} from "firebase/messaging";
import { HelperConstanta } from "./helper/constanta";

const firebaseConfig = {
  apiKey: "AIzaSyAt2P55ButFrNmfFvm-f_V6G9Y4CUXt-NM",
  authDomain: "sabana-d5230.firebaseapp.com",
  databaseURL: "https://sabana-d5230.firebaseio.com",
  projectId: "sabana-d5230",
  storageBucket: "sabana-d5230.appspot.com",
  messagingSenderId: "126788806522",
  appId: "1:126788806522:web:8ef576aa78cbd7442e98c3",
  measurementId: "G-8MMWF5T4B1",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
let messaging = getMessaging(app);
const getTokenFCM = async (setToken) => {
  let isSupp = await isSupported();
  let token = null;
  if (isSupp) {
    getToken(messaging, {
      vapidKey:
        "BNEo4vy4gB-ryMvyXrdJyNf5sL0XkQ7pO3t_q-6AIsR5Q81FrsvGRcxYXnboqLjLkclf9Un0f9_eNFdNzFOx-Lo",
    })
      .then((currentToken) => {
        if (currentToken) {
          token = currentToken;
        }
      })
      .catch((error) => {
        setToken(null);
      })
      .finally(() => localStorage.setItem(HelperConstanta.fcm, token));
  } else {
    localStorage.setItem(HelperConstanta.fcm, token);
  }
};

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

export { getTokenFCM };
