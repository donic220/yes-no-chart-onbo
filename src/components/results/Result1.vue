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
      </div>
      <div class="description-section">
        <p class="result-description">
          オンボーディングはもちろん、研修すらままならない組織!?<br/>
          組織の雰囲気は悪く、若手は入っては辞めてしまう。<br/>
          ベテラン社員が「最近入った若手もう辞めたらしいよ」と会話している様子が見られる。<br/>
          組織を良くしようとする社員は変化を嫌う反対勢力の抵抗に遭い、心折れて辞めていく。<br/>
          このような組織が内部から変化していくのはかなり難しい。<br/>
          もし社内に向上心が高く組織のために尽くしてくれている社員がいるのであれば、助けるとは言わないまでも、応援して上げて欲しい。
        </p>
      </div>
    </div>
    <div class="action-container">
      <div class="ratings-container">
        <div class="rating-groups">
          <div class="ratings-title">オンボーディング<br>レベル</div>
          <div class="rating-item">
            <span class="rating-label">ウェルカム</span>
            <div class="stars">
              <span class="star">★</span>
            </div>
          </div>
          <div class="rating-item">
            <span class="rating-label">早期戦力化</span>
            <div class="stars">
              <span class="star">★</span>
            </div>
          </div>
          <div class="rating-item">
            <span class="rating-label">エンゲージメント</span>
            <div class="stars">
              <span class="star">★</span>
            </div>
          </div>
          <h3 class="ratings-points">0/3<br>points</h3>
        </div>
      </div>
      <button class="result-button" @click="showDetailImage">オンボーディングを<br>はじめる</button>
    </div>
    
    <!-- 詳細画像モーダル -->
    <div v-if="isDetailImageVisible" class="modal-overlay" @click="hideDetailImage">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="hideDetailImage">×</button>
        <img 
          src="@/images/results/r1_2.jpg" 
          alt="詳細画像" 
          class="detail-image"
        />
        <router-link to="/ombo" class="ombo-link">
          <v-icon icon="mdi-check-circle" class="check-icon"></v-icon>
          Omboで取り組む
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultR1",
  data() {
    return {
      isDetailImageVisible: false
    };
  },
  methods: {
    showDetailImage() {
      this.isDetailImageVisible = true;
    },
    hideDetailImage() {
      this.isDetailImageVisible = false;
    },
    navigateToOnboarding() {
      this.$router.push('/onboarding');
    }
  }
};
</script>

<style scoped>
.result {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
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
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
}

.image-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.description-section {
  flex: 1;
  padding-left: 20px;
}

.result-image {
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 8px;
  margin-left: 80px;
}

.result-description {
  font-size: 1.4em;
  color: black;
  text-align: left;
  padding-right: 30px;
  line-height: 1.6;
  font-weight: bold;
}

.action-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ratings-container {
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  margin-top: 10px;
}

.rating-groups {
  display: flex;
  width: 100%;
}

.ratings-points, 
.ratings-title {
  margin-top: 30px;
  font-size: 1.2em;
  color: #fff;
}

.rating-item {
  text-align: center;
  width: 150px;
}

.rating-label {
  display: block;
  font-size: 1.1em;
  color: #fff;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
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

.star.half {
  position: relative;
  display: inline-block;
  color: #ccc; /* 背景の星の色 */
}

.star.half::before {
  content: "★"; /* 星の形 */
  position: absolute;
  left: 0;
  color: #ffcc00; /* 半分の星の色 */
  width: 100%; /* 半分の幅 */
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
  clip-path: inset(0 50% 0 0); /* 左半分だけ表示 */
}


.star.filled {
  color: #ffcc00;
}

.result-button {
  font-size: 1.4em;
  color: white;
  background-color: #003366;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-right: 200px;
  width: 350px;
  height: 80px;
}

.result-button:hover {
  background-color: #00264d;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* モーダルのスタイル */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}

.detail-image {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin-bottom: 40px; /* マージンを増やして重なりのスペースを確保 */
}

.ombo-link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -50px auto 25px; /* マイナスマージンで上に移動させる */
  color: #ffffff;
  font-size: 1.4em;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  padding: 10px 20px;
  font-weight: 600;
  background-color: #003366;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 51, 102, 0.2);
  max-width: 300px;
  z-index: 20; /* 画像より上に表示されるようにする */
}

.check-icon {
  margin-right: 8px;
  color: #ffffff; /* 色を変更 */
  font-size: 1.5em;
}

.ombo-link:hover {
  color: #ffffff;
  background-color: #003366; /* 背景色を変更 */
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 51, 102, 0.3);
}

.ombo-link:hover .check-icon {
  color: #ffffff;
}
</style>
