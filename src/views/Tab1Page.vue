<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tabla de claves</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>

        <ion-item v-for="(item,index) in listaClaves" :key="index">
          <ion-avatar slot="start">
          </ion-avatar>
          <ion-label>
            <h2>Clave: {{listaKeys[index]}}</h2>
            <h4>Status: {{item.status}} </h4>
            <p>Usuario: {{item.usuario}} </p>
          </ion-label>
        </ion-item>

      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
//import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import { getDatabase, ref, onValue } from "firebase/database";

export default  {
  name: 'Tab1Page',
  components: { /*ExploreContainer, */IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  mounted() {
    const db = getDatabase();
    const starCountRef = ref(db, "claves/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0
      snapshot.forEach(element => {
        this.listaKeys[cont]=element.key
        this.listaClaves[cont] = element.toJSON()
        cont++
      });
    });
    console.log("lista de claves", this.listaCaves);
  },
  data(){ return{
    listaClaves: [{status:"", usuario:""}],
    listaKeys:[]
  }}
};

</script>

<style>
  div{
    color:#000000;
  }

  .subtitle{
    font-weight: bold;
  }

  ion-col > div {
    background-color: #f7f7f7;
    border: solid 1px #ddd;
    padding: 10px;
  }
</style>