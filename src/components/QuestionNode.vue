<template>
  <div class="question-node">
    <div class="image-container">
      <p class="question-text">{{ question }}</p>
      <div class="image-wrapper">
        <img :src="imagePath" alt="Question Image" class="question-image" />
      </div>
      <div class="button-container">
        <v-btn @click="answer(true)" class="yes-button">はい</v-btn>
        <v-btn @click="answer(false)" class="no-button">いいえ</v-btn>
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
      新入社員の受け入れに顕在的な課題がある: require("@/images/question/q1.png"),
      業務キャッチアップは新入社員次第: require("@/images/question/q2.png"),
      トップダウンの組織である: require("@/images/question/q3.png"),
      去るもの追わず辞めるやつが悪い: require("@/images/question/q4.png"),
      業務キャッチアップの遅行がよく見られる: require("@/images/question/q5.png"),
      定着はさせたいが都度対応になっている: require("@/images/question/q6.png"),
      既存社員がどこか中途入社者に壁を作っている: require("@/images/question/q7.png"),
      "OJT制度はあるが、正直属人的である": require("@/images/question/q8.png"),
      新入社員と企業カルチャーのミスマッチが見られる: require("@/images/question/q9.png"),
      志の高い新入社員が多く入社してくる: require("@/images/question/q10.png"),
      新入社員に対して研修制度を設けている: require("@/images/question/q11.png"),
      お互いに牽制しあって対立は起きづらい: require("@/images/question/q12.png"),
      新入社員の早期離職は多い: require("@/images/question/q13.png"),
      "MTGでは上司部下関係なく、みな意見を主張できる": require("@/images/question/q14.png"),
      チームとしての意識やミッションが弱い: require("@/images/question/q15.png"),
      新入社員のロードマップがある: require("@/images/question/q16.png")
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
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.image-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.question-text {
  font-size: 2.5rem; /* レスポンシブに対応するよう相対単位に変更 */
  color: rgb(74, 71, 71);
  margin-top: 2rem;
  margin-bottom: 2rem;
  word-break: break-word;
  line-height: 1.4;
}

.image-wrapper {
  width: 100%;
  max-width: 400px; /* 画像コンテナの最大幅を制限 */
  height: 400px; /* 高さも固定 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* はみ出し部分を隠す */
}

.question-image {
  max-width: 100%;
  max-height: 100%; /* 高さも制限 */
  object-fit: contain; /* アスペクト比を保ったまま収める */
  margin: 0; /* マージンをリセット */
}

.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* スマホで折り返し可能に */
  gap: 40px; /* ボタン間の間隔 */
  margin-top: 40px;
}

.yes-button,
.no-button {
  width: 250px;
  max-width: 45%;
  height: 60px;
  border: 2px solid rgb(74, 71, 71);
  font-size: 20px;
}

.yes-button:hover,
.no-button:hover {
  background-color: rgb(160, 156, 156);
  color: white;
}

/* タブレット用メディアクエリ */
@media screen and (max-width: 768px) {
  .question-text {
    font-size: 2rem;
  }
  
  .image-wrapper {
    max-width: 250px;
    height: 250px;
  }
  
  .yes-button,
  .no-button {
    width: 180px;
    height: 50px;
    font-size: 18px;
  }
}

/* スマホ用メディアクエリ */
@media screen and (max-width: 480px) {
  .question-node {
    max-width: 100%;
  }
  
  .image-container {
    margin: 5px;
  }
  
  .question-text {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2rem; /* フォントサイズをさらに小さく */
    line-height: 1.3;
  }
  
  .image-wrapper {
    max-width: 180px; /* 画像サイズをさらに小さく */
    height: 180px;
  }
  
  .button-container {
    flex-direction: column;
    align-items: center;
    gap: 0px;
    margin-top: 20px; /* マージンを小さく */
  }
  
  .yes-button,
  .no-button {
    width: 160px; /* ボタン幅を小さく */
    max-width: 80%;
    height: 40px; /* ボタン高さを小さく */
    font-size: 14px; /* フォントサイズを小さく */
    margin: 5px 0;
  }
}
</style>