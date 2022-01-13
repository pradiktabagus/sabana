/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

var firebaseConfig = initializeApp({
  apiKey: "AIzaSyAt2P55ButFrNmfFvm-f_V6G9Y4CUXt-NM",
  authDomain: "sabana-d5230.firebaseapp.com",
  databaseURL: "https://sabana-d5230.firebaseio.com",
  projectId: "sabana-d5230",
  storageBucket: "sabana-d5230.appspot.com",
  messagingSenderId: "126788806522",
  appId: "1:126788806522:web:8ef576aa78cbd7442e98c3",
  measurementId: "G-8MMWF5T4B1",
});
const messaging = getMessaging(firebaseConfig);

onBackgroundMessage(messaging, (payload) => {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
