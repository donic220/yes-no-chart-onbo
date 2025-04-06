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
