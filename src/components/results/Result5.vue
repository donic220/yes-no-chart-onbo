<template>
  <div class="result">
    <h1 class="result-title">理想のしなやかな組織</h1>
    <div class="result-content">
      <div class="image-section">
        <img
          src="@/images/results/r5.png"
          alt="理想のしなやかな組織"
          class="result-image"
        />
      </div>
      <div class="description-section">
        <p class="result-description">
          息を吸うように組織で成果を出そうとする企業。<br>オンボーディングという言葉が浸透する前から、新入社員フォローに取り組んでいる状態。<br>
          社員一人ひとりが自律しており、キャリアビジョンも持っているが、この組織が好きだから働いているという社員が多い。最近の研究でもキャリア自律している社員の方がその組織で働く満足度が高いという結果も出ている。<br>
          各施策の点と点をつなぎオンボーディングとしての成果を最大化しましょう。<br>
          さらなる飛躍につなげるために、工数削減と効果測定に取り組むと尚良いでしょう。<br>
        </p>
      </div>
    </div>
    <div style="display: flex;">
    <div class="ratings-container">
      <div class="rating-groups">
        <div class="ratings-title">オンボーディング<br>レベル</div>
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
        <h3 class="ratings-points">3/3<br>points</h3>
      </div>
    </div>
          <button class="result-button">Omboで取り組む</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "ResultR5",
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
  /* max-width: 1200px; */
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
  padding-right: 0px;
  width: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-left: 20px;
}

.result-image {
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 8px;
  margin: 0px 0px 0px 80px;
  display: block;
}

.result-description {
  font-size: 1.4em;
  color: black;
  text-align: left;
  padding: 0px 30px 0 0;
  border-radius: 8px;
  line-height: 1.6;
  font-weight: bold;
}

.ratings-container {
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  margin-top: 10px;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ratings-points, 
.ratings-title {
  margin-top: 30px;
  font-size: 1.2em;
  color: #fff;
}

.rating-groups {
  display: flex;
  margin-bottom: 15px;
  width: 100%;
}

.rating-item {
  text-align: center;
  width: 150px;
  box-sizing: border-box;
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

.star.filled {
  color: #ffcc00;
}

.star.half {
  position: relative;
  display: inline-block;
}

.star.half::before {
  content: "★";
  position: absolute;
  color: #ffcc00;
  width: 50%;
  overflow: hidden;
}

.star.partial {
  position: relative;
  display: inline-block;
}

.star.partial::before {
  content: "★";
  position: absolute;
  color: #ffcc00;
  width: var(--fill-percent, 50%);
  overflow: hidden;
}

.points {
  font-size: 1.3em;
  color: #fff;
  font-weight: bold;
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
  margin-top: 20px;
  margin-left: 100px;
  width: 350px;
  height: 80px;
}

.result-button:hover {
  background-color: #00264d;
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
  .rating-item {
    width: 100%;
    margin-bottom: 10px;
  }
  .satisfaction-rating {
    width: 90%;
  }
}
</style>
