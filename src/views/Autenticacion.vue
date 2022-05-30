<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Autenticación de usuario</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card class="center">
        <ion-card-header>
          <ion-card-title>Bienvenido al visualizador de claves y usuarios</ion-card-title>
          <ion-card-subtitle>Inicie sesión con su correo y contraseña</ion-card-subtitle>
          <form @submit.prevent="signIn(email,password)">
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Contraseña</ion-label>
              <ion-input v-model="password" type="password"></ion-input>
            </ion-item>
            <ion-button expand="block" color="primary" class="ion-margin-top" type="submit">Iniciar sesión</ion-button>
          </form>

          <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader,IonInput,IonButton,IonItem,IonLabel} from '@ionic/vue';
//import {getAuth, /*signInWithEmailAndPassword*/ } from "firebase/auth";
//import { initializeApp } from "firebase/app";
//import { getDatabase, ref, onValue } from "firebase/database";
import { reactive,toRefs } from "vue";
import { useRouter }from "vue-router";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default{
  name: 'auth-screen',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader,IonInput,IonButton,IonItem,IonLabel},
  setup(){
    const router = useRouter();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      errorMessage: ""
    });
    const signIn = async (email, password) =>{
      try {
        if(!email || !password){
          state.errorMessage = "Falta correo o contraseña";
          return;
        }
        await firebase.auth().signInWithEmailAndPassword(email,password);
        router.push("/tabs/tab1");
      }catch(error){
        console.log(error)
        if (error=="auth/invalid-email"){
          state.errorMessage = "Correo o contraseña incorrectos";
        }
          state.errorMessage = error.message;
      }
    }
    return {
      ...toRefs(state),
      signIn,
    }
  }
};

</script>

<style>
  .center {
    display: flex;
    height: 90vh;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .error-message {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
    text-align: center;
  }
</style>