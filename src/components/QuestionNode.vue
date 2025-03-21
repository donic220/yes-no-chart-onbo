<template>
  <div class="question-node">
    <div class="image-container">
      <p>{{ question }}</p>
      <img :src="imagePath" alt="Question Image" class="question-image" />
      <div class="button-container">
        <button @click="answer(true)" class="yes-button">はい</button>
        <button @click="answer(false)" class="no-button">いいえ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "QuestionNode",
  props: {
    question: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const imagePaths = {
      新入社員の受け入れに顕在的な課題がある: require("@/images/question/q1.svg"),
      業務キャッチアップは新入社員次第: require("@/images/question/q2.jpg"),
      トップダウンの組織である: require("@/images/question/q3.jpg"),
      去るもの追わず辞めるやつが悪い: require("@/images/question/q4.jpg"),
      業務キャッチアップの遅行がよく見られる: require("@/images/question/q5.jpg"),
      定着はさせたいが都度対応になっている: require("@/images/question/q6.jpg"),
      既存社員がどこか中途入社者に壁を作っている: require("@/images/question/q7.jpg"),
      "OJT制度はあるが、正直属人的である": require("@/images/question/q8.jpg"),
      新入社員と企業カルチャーのミスマッチが見られる: require("@/images/question/q9.jpg"),
      志の高い新入社員が多く入社してくる: require("@/images/question/q10.jpg"),
      新入社員に対して研修制度を設けている: require("@/images/question/q11.jpg"),
      お互いに牽制しあって対立は起きづらい: require("@/images/question/q12.jpg"),
      新入社員の早期離職は多い: require("@/images/question/q13.jpg"),
      "MTGでは上司部下関係なく、みな意見を主張できる": require("@/images/question/q14.jpg"),
      チームとしての意識やミッションが弱い: require("@/images/question/q15.jpg"),
      新入社員のロードマップがある: require("@/images/question/q16.jpg"),
    };

    const imagePath = computed(() => imagePaths[props.question] || "");

    const answer = (value) => {
      emit("answer", value);
    };

    return { imagePath, answer };
  },
});
</script>

<style scoped>
.question-node {
  text-align: center;
  position: relative;
}

.image-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.question-image {
  max-width: 5%;
  height: auto;
}

p {
  font-size: 45px; /* 文字を大きめに設定 */
  color: rgb(74, 71, 71); /* 文字の色を黒に設定 */
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.yes-button,
.no-button {
  margin: 10px;
  width: 250px;
  height: 60px;
  background-color: white; /* ボタンの背景色を白に設定 */
  color: rgb(74, 71, 71); /* ボタンの文字色を黒に設定 */
  border: 2px solid rgb(74, 71, 71); /* ボタンの枠を黒に設定 */
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
}

.yes-button:hover,
.no-button:hover {
  background-color: rgb(160, 156, 156); /* ホバー時の背景色を黒に設定 */
  color: white; /* ホバー時の文字色を白に設定 */
}
</style>
