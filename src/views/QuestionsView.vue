<template>
  <div class="questions-view">
    <YesNoChart />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import YesNoChart from "@/components/YesNoChart.vue";

@Options({
  components: {
    YesNoChart,
  },
})
export default class QuestionsView extends Vue {}
</script>

<style>
.questions-view {
  padding: 20px;
  text-align: center;
}

/* スマホ向けレスポンシブデザイン */
@media screen and (max-width: 780px) {
  .questions-container {
    padding: 10px;
    width: 95%;
  }
  
  .question-title {
    font-size: 1.3em;
    margin-bottom: 10px;
  }
  
  .question-text {
    font-size: 1em;
    margin-bottom: 15px;
  }
  
  .question-image {
    margin: 10px auto;
    max-width: 90%;
    max-height: 200px; /* 画像サイズを制限 */
  }
  
  .answers {
    flex-direction: column;
  }
  
  .answer-button {
    width: 80%;
    margin: 5px 0;
    padding: 10px;
    font-size: 1em;
  }
  
  .navigation-buttons {
    margin-top: 15px;
  }
  
  .nav-button {
    padding: 8px 15px;
    font-size: 0.9em;
    min-width: 80px;
  }
  
  .progress-bar {
    margin: 15px 0;
  }
}
</style>