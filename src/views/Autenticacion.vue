<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Autenticación</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Bienvenido al visualizador de claves y usuarios</ion-card-title>
          <ion-card-subtitle>Inicie sesión con su correo y contraseña</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <form @submit.prevent="signInWithEmailAndPassword(email,password)">
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
        </ion-card-content>
        <ion-card-content v-if="errorMessage" class="error-message">
          {{errorMessage}}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent,IonInput,IonButton,IonItem,IonLabel} from '@ionic/vue';
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { reactive,toRefs } from "vue";
import { useRouter }from "vue-router";

enum AuthMode
{
  SignIn,
  SignUp
};

export default{
  name: 'Autenticacion',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent,IonInput,IonButton,IonItem,IonLabel},
  setup(){
    const router = useRouter();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      mode: AuthMode.SignIn,
      errorMessage: "",
    });
    const signInWithEmailAndPassword = async (email:string, password:string) =>{
      try {
        if(!email || !password){
          state.errorMessage = "Falta correo o contraseña";
          return;
        }
        await auth.signInWithEmailAndPassword(email,password);
        router.push("/tabs/tab1");
      }catch(error){
          state.errorMessage = error.message;
      }
    }
    return {
      ...toRefs(state),
      signInWithEmailAndPassword,
      AuthMode
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