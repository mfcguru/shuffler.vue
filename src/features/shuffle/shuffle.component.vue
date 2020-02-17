<template>
  <div>
    <div class="text-center py-5">
      <button class="btn btn-primary mx-5" @click="doApiShuffle()">API Shuffle</button>
      <button class="btn btn-primary" @click="doSocketShuffle()">Socket Shuffle</button>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row hidden-md-up">
          <div v-for="card in cards" :key="card.key" class="col-md-1 col-sm-6">
            <div class="card border-0 py-1">
              <div class="card-block">
                <img
                  :src="serverHost + card.imageUrl"
                  class="rounded"
                  style="width:auto; height:230px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiShuffle, socketShuffle } from "./shuffle.service";

const signalR = require("@aspnet/signalr");

export default {
  path: "/shuffle",
  name: "ShuffleComponent",
  data() {
    return {
      serverHost: process.env.VUE_APP_HOST_URL,
      cards: []
    };
  },
  created: function() {
    let connection = new signalR.HubConnectionBuilder()
      .withUrl(process.env.VUE_APP_HOST_URL + "/deckHub")
      .build();

    connection
      .start()
      .then(() => console.log("Connection started"))
      .catch(err => console.log("Error while starting connection: " + err));

    connection.on("SocketShuffle", data => {
      this.cards = data;
    });
  },
  methods: {
    doApiShuffle: function(event) {
      if (event !== undefined) event.preventDefault();
      let vm = this;
      apiShuffle()
        .then(response => {
          vm.cards = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    doSocketShuffle: function(event) {
      if (event !== undefined) event.preventDefault();
      socketShuffle()
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style scoped>
</style>
