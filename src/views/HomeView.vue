<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-center">Yes/No Chart</v-card-title>
            <v-card-text>
              <YesNoChart />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import YesNoChart from "@/components/YesNoChart.vue"; // @ is an alias to /src

@Options({
  components: {
    YesNoChart,
  },
})
export default class HomeView extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
