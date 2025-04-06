<template>
  <div class="results-view">
    <component :is="resultComponent" v-if="resultComponent" />
    <div v-else class="error-message">
      <h2>結果が見つかりません</h2>
      <router-link to="/" class="back-link">トップページに戻る</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineAsyncComponent, computed } from "vue";

@Options({
  props: {
    id: String
  }
})
export default class ResultsView extends Vue {
  id!: string;

  get resultComponent() {
    try {
      return defineAsyncComponent(() => import(`@/components/results/Result${this.id}.vue`));
    } catch (e) {
      console.error(`Result${this.id}.vue not found`, e);
      return null;
    }
  }
}
</script>

<style>
.results-view {
  padding: 20px;
  text-align: center;
}

.error-message {
  margin: 50px auto;
  max-width: 500px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  color: #333;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #003366;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.back-link:hover {
  background-color: #00264d;
}

/* スマホ向け */
@media screen and (max-width: 780px) {
  .results-view {
    padding: 10px;
  }
  
  .error-message {
    margin: 30px auto;
    max-width: 90%;
    padding: 15px;
  }
  
  .error-message h2 {
    font-size: 1.3em;
  }
  
  .back-link {
    margin-top: 15px;
    padding: 8px 16px;
    font-size: 0.9em;
  }
}
</style>