<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Autenticación</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

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