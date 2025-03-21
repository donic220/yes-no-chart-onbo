<template>
  <div class="result">
    <h1 class="result-title">昭和のブラック組織</h1>
    <div class="result-content">
      <img
        src="@/images/results/r1.jpg"
        alt="昭和のブラック組織"
        class="result-image"
      />
      <p class="result-description">
        オンボーディングはもちろん、研修すらままならない組織!?<br />
        組織の雰囲気は悪く、若手は入っては辞めてしまう。ベテラン社員が「最近入った若手もう辞めたらしいよ」と会話している様子が見られる。組織を良くしようとする社員は変化を嫌う反対勢力の抵抗に遭い、心折れて辞めていく。<br />
        このような組織が内部から変化していくのはかなり難しい。もし社内に向上心が高く組織のために尽くしてくれている社員がいるのであれば、助けるとは言わないまでも、応援して上げて欲しい。
      </p>
    </div>
    <div class="result-footer">
      <button class="result-button">オンボーディングをはじめる</button>
    </div>
    <div class="rating">
      <span class="rating-center-label">オンボーディングレベル</span>
      <div class="rating-item">
        <span class="rating-label">ウェルカム</span>
        <div class="stars">
          <span class="star filled">★</span>
        </div>
      </div>
      <div class="rating-item">
        <span class="rating-label">早期戦力化</span>
        <div class="stars">
          <span class="star filled">★</span>
        </div>
      </div>
      <div class="rating-item">
        <span class="rating-label">エンゲージメント</span>
        <div class="stars">
          <span class="star filled">★</span>
        </div>
      </div>
      <span class="rating-center-label">0/3 points</span>
    </div>
  </div>
  <v-rating
    background-color="orange lighten-3"
    color="orange"
    hover="true"
    large
    v-model="satisfaction"
  ></v-rating>
</template>
<script>
export default {
  name: "ResultR1",
  data: () => ({
    satisfaction: 5,
  }),
};
</script>

<style scoped>
.result {
  text-align: center;
  background-color: #56bee3; /* 背景色をライトブルーに設定 */
  padding: 20px;
  border-radius: 10px;
}

.result-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.result-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-image {
  max-width: 50%;
  height: auto;
  margin-bottom: 20px;
}

.result-description {
  font-size: 1.2em;
  color: #333;
  text-align: left;
  max-width: 800px;
  margin-bottom: 20px;
}

.result-footer {
  display: flex;
  justify-content: center;
}

.result-button {
  padding: 10px 20px;
  font-size: 1.2em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.result-button:hover {
  background-color: #0056b3;
}

.rating {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.rating-center-label {
  padding-top: 40px;
}
.rating-item {
  text-align: center;
}

.rating-label {
  display: block;
  font-size: 1em;
  margin-bottom: 5px;
  padding: 5px 20px 0px 0px;
}

.stars {
  display: flex;
  justify-content: center;
}

.star {
  font-size: 1.5em;
  color: #ccc;
}

.star.filled {
  color: #ffcc00;
}
</style>
