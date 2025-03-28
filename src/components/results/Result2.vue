<template>
  <div class="result">
    <h1 class="result-title">OJTという名の現場任せ組織</h1>
    <div class="result-content">
      <div class="image-section">
        <img
          src="@/images/results/r2.png"
          alt="OJTという名の現場任せ組織"
          class="result-image"
        />
      </div>
      <div class="description-section">
        <p class="result-description">
          甲南大学の尾形教授による中小企業オンボーディング実態調査では、「OJTを中心とした現場での指導を実施している」と回答した企業が最も多く、次に多かったのが「特に何もしていない」の回答。<br>
          「現場での指導」は、「現場に丸投げ」を意味しており、組織として何の施策も講じていないと捉えることができる。<br>
          OJTといえばそれらしく聞こえるが、実態が変わらないと若手の流出は防げない。<br>
          目の前の若手社員は社内の同僚と競争しているのではなく、学生時代の同期の成長をSNSを通じて見ているのだ。<br>
          真摯に組織やオンボーディングづくりに向き合うときが来たのかもしれない。
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
              <span class="star half">★</span>
            </div>
          </div>
          <div class="rating-item">
            <span class="rating-label">エンゲージメント</span>
            <div class="stars">
              <span class="star">★</span>
            </div>
          </div>
          <h3 class="ratings-points">0.5/3<br>points</h3>
        </div>
      </div>
      <button class="result-button" @click="showDetailImage">オンボーディングを<br>はじめる</button>
    </div>
    
    <!-- 詳細画像モーダル -->
    <div v-if="isDetailImageVisible" class="modal-overlay" @click="hideDetailImage">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="hideDetailImage">×</button>
        <img 
          src="@/images/results/r2-2.jpg" 
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
  name: "ResultR2",
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
