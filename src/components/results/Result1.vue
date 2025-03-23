<template>
  <div class="result">
    <h1 class="result-title">昭和のブラック組織</h1>
    <div class="result-content">
      <div class="image-section">
        <img
          src="@/images/results/r1.png"
          alt="昭和のブラック組織"
          class="result-image"
        />
        <div class="ratings-container">
          <h3 class="ratings-title">オンボーディングレベル</h3>
          <div class="rating-groups">
            <div class="rating-item">
              <span class="rating-label">ウェルカム</span>
              <div class="stars">
                <!-- <span class="star filled">★</span> -->
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
            </div>
            <div class="rating-item">
              <span class="rating-label">早期戦力化</span>
              <div class="stars">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
            </div>
            <div class="rating-item">
              <span class="rating-label">エンゲージメント</span>
              <div class="stars">
                <span class="star">★</span>
                <span class="star">★</span>  
                <span class="star">★</span>
              </div>
            </div>
          </div>
          <div class="points">0/9 points</div>
        </div>
      </div>
      
      <div class="description-section">
        <p class="result-description">
          オンボーディングはもちろん、研修すらままならない組織!?<br />
          組織の雰囲気は悪く、若手は入っては辞めてしまう。ベテラン社員が「最近入った若手もう辞めたらしいよ」と会話している様子が見られる。組織を良くしようとする社員は変化を嫌う反対勢力の抵抗に遭い、心折れて辞めていく。<br />
          このような組織が内部から変化していくのはかなり難しい。もし社内に向上心が高く組織のために尽くしてくれている社員がいるのであれば、助けるとは言わないまでも、応援して上げて欲しい。
        </p>
        
        <div class="result-button-container">
          <button class="result-button">オンボーディング<br>をはじめる</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultR1",
  data: () => ({
    satisfaction: 3,
  }),
};
</script>

<style scoped>
.result {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
}

.result-title {
  font-size: 2.5em;
  margin: 30px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.result-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
}

.image-section {
  flex: 1;
  padding-right: 20px;
  width: 50%; /* 親要素の50%の幅にする */
  max-width: 50%; /* 最大幅も50%に制限 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 追加: 子要素を中央揃えにする */
}

.description-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-left: 20px;
}

.result-image {
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 8px; 
  margin: 50px 0px 0px 0px;
  display: block; /* 追加: ブロック要素として表示 */
}

.result-description {
  font-size: 1.4em;
  color: black;
  text-align: left;
  padding: 30px 30px 0 0;
  border-radius: 8px;
  line-height: 1.6;
  font-weight: bold;
}

.ratings-container {
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  margin-top: 10px;
}

.ratings-title {
  font-size: 1.5em;
  color: #fff;
  margin-bottom: 15px;
}

.rating-groups {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  padding-left: 40px; 
}

.rating-item {
  text-align: center;
  padding: 0 15px;
}

.rating-label {
  display: block;
  font-size: 1.2em;
  color: #fff;
  margin-bottom: 8px;
}

.stars {
  display: flex;
  justify-content: center;
}

.star {
  font-size: 1.8em;
  color: #ccc;
  margin: 0 2px;
}

.star.filled {
  color: #ffcc00;
}

.points {
  font-size: 1.3em;
  color: #fff;
  font-weight: bold;
}

.result-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.result-button {
  padding: 12px 25px;
  font-size: 1.4em;
  color: white;
  background-color: #003366; /* 紺色に変更 */
  border: none;
  border-radius: 8px; /* 角の丸みを調整 */
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%; /* 横長にするために幅を設定 */
  max-width: 300px; /* 最大幅を制限 */
}

.result-button:hover {
  background-color: #00264d; /* ホバー時の色も紺色の暗い色合いに変更 */
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.satisfaction-rating {
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 8px;
  width: 60%;
}

.satisfaction-rating p {
  color: #fff;
  margin-bottom: 10px;
}

/* レスポンシブデザイン対応 */
@media (max-width: 768px) {
  .result-content {
    flex-direction: column;
  }
  
  .image-section, .description-section {
    padding: 0;
    margin-bottom: 20px;
    width: 100%;
    max-width: 100%;
  }
  
  .rating-groups {
    flex-direction: column;
    gap: 15px;
  }
  
  .satisfaction-rating {
    width: 90%;
  }
}
</style>
