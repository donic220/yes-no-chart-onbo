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
  font-size: 2.2rem; /* レスポンシブに対応するよう相対単位に変更 */
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

/* モバイル端末用メディアクエリ */
@media screen and (max-width: 768px) {
  .question-node {
    max-width: 100%;
    padding-top: 40px; /* 上部に余白を追加して全体を下げる */
  }
  
  .image-container {
    margin: 10px;
    margin-top: 30px; /* 上部にマージンを追加してさらに下げる */
  }
  
  .question-text {
    margin-top: 1.5rem; /* 上部マージンを増やして下に下げる */
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 1.3;
  }
  
  .image-wrapper {
    max-width: 220px;
    height: 220px;
    margin-top: 15px; /* 画像コンテナも少し下に */
  }
  
  .button-container {
    flex-direction: row; /* 縦並びから横並びに変更 */
    justify-content: center; /* 中央揃えに */
    align-items: center;
    gap: 20px; /* ボタン間の間隔を設定 */
    margin-top: 35px; /* ボタンコンテナを下に下げる */
  }
  
  .yes-button,
  .no-button {
    width: 130px; /* 横並びにするため幅を少し小さく */
    max-width: 45%; /* 比率で幅を設定 */
    height: 45px;
    font-size: 16px;
    margin: 0; /* マージンをリセット */
  }
}
</style>