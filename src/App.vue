<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import firebase from 'firebase/compat/app';
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "prueba@gmail.com", "prueba")
        .then((userCredential) => {
    // Signed in
          const user = userCredential.user;
          if(user== null)
          {
            console.log("no autenticado") }
          else
          {
            console.log("usuario autenticado", user);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyDdjATyfxVSPeC6hpRkg9FtSUtfjqLqQL8",
  authDomain: "proyectotickets-faf62.firebaseapp.com",
  databaseURL: "https://proyectotickets-faf62-default-rtdb.firebaseio.com",
  projectId: "proyectotickets-faf62",
  storageBucket: "proyectotickets-faf62.appspot.com",
  messagingSenderId: "493934538026",
  appId: "1:493934538026:web:8a468c60a37e3f3058c253"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);



</script>