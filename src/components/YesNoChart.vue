<template>
  <div class="yes-no-chart">
    <QuestionNode
      v-if="currentNode && currentNode.question"
      :question="currentNode.question"
      @answer="handleAnswer"
    />
    <p v-else>{{ currentNode }}</p>
    <component :is="currentResultComponent" v-if="currentResultComponent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, defineAsyncComponent } from "vue";
import QuestionNode from "./QuestionNode.vue";

const QUESTIONS = {
  Q1: "新入社員の受け入れに顕在的な課題がある",
  Q2: "業務キャッチアップは新入社員次第",
  Q3: "トップダウンの組織である",
  Q4: "去るもの追わず辞めるやつが悪い",
  Q5: "業務キャッチアップの遅行がよく見られる",
  Q6: "定着はさせたいが都度対応になっている",
  Q7: "既存社員がどこか中途入社者に壁を作っている",
  Q8: "OJT制度はあるが、正直属人的である",
  Q9: "新入社員と企業カルチャーのミスマッチが見られる",
  Q10: "志の高い新入社員が多く入社してくる",
  Q11: "新入社員に対して研修制度を設けている",
  Q12: "お互いに牽制しあって対立は起きづらい",
  Q13: "新入社員の早期離職は多い",
  Q14: "MTGでは上司部下関係なく、みな意見を主張できる",
  Q15: "チームとしての意識やミッションが弱い",
  Q16: "新入社員のロードマップがある",
};

const RESULTS: { [key: string]: () => Promise<typeof import("*.vue")> } = {
  R1: () => import("./results/Result1.vue"),
  R2: () => import("./results/Result2.vue"),
  R3: () => import("./results/Result1.vue"),
  R4: () => import("./results/Result1.vue"),
  R5: () => import("./results/Result1.vue"),
  R6: () => import("./results/Result1.vue"),
  R7: () => import("./results/Result1.vue"),
  R8: () => import("./results/Result1.vue"),
};

interface Chart {
  [key: string]: Node;
}

interface Node {
  question?: string;
  yes?: string | Node;
  no?: string | Node;
  result?: string;
}

const chart: Chart = {
  Q1: { question: QUESTIONS.Q1, yes: "Q2", no: "Q5" },
  Q2: { question: QUESTIONS.Q2, yes: "Q3", no: "Q6" },
  Q3: { question: QUESTIONS.Q3, yes: "Q4", no: "Q7" },
  Q4: { question: QUESTIONS.Q4, yes: "R1", no: "Q8" },
  Q5: { question: QUESTIONS.Q5, yes: "Q6", no: "Q9" },
  Q6: { question: QUESTIONS.Q6, yes: "Q7", no: "Q11" },
  Q7: { question: QUESTIONS.Q7, yes: "Q8", no: "Q11" },
  Q8: { question: QUESTIONS.Q8, yes: "R2", no: "Q12" },
  Q9: { question: QUESTIONS.Q9, yes: "Q10", no: "Q13" },
  Q10: { question: QUESTIONS.Q10, yes: "Q11", no: "Q14" },
  Q11: { question: QUESTIONS.Q11, yes: "Q12", no: "Q15" },
  Q12: { question: QUESTIONS.Q12, yes: "R3", no: "Q16" },
  Q13: { question: QUESTIONS.Q13, yes: "Q14", no: "R5" },
  Q14: { question: QUESTIONS.Q14, yes: "Q15", no: "R6" },
  Q15: { question: QUESTIONS.Q15, yes: "Q16", no: "R7" },
  Q16: { question: QUESTIONS.Q16, yes: "R4", no: "R8" },
};

export default defineComponent({
  name: "YesNoChart",
  components: { QuestionNode },
  setup() {
    const currentNode = ref<Node | null>(chart.Q1);
    const currentResult = ref<string>("");

    const getNode = (key: string | Node): Node => {
      if (typeof key === "string") {
        return chart[key] as Node;
      }
      return key;
    };

    const handleAnswer = (answer: boolean) => {
      if (currentNode.value) {
        const nextNode = answer ? currentNode.value.yes : currentNode.value.no;
        if (nextNode) {
          currentNode.value = getNode(nextNode);
          if (typeof nextNode === "string" && nextNode.startsWith("R")) {
            currentResult.value = nextNode;
          }
        }
      }
    };

    const currentResultComponent = computed(() => {
      if (currentResult.value) {
        return defineAsyncComponent(RESULTS[currentResult.value]);
      }
      return null;
    });

    return {
      currentNode,
      handleAnswer,
      currentResultComponent,
    };
  },
});
</script>

<style scoped>
.yes-no-chart {
  margin: 20px;
}
</style>
