<template>
  <div class="result">
    <h1 class="result-title">令和のゆるい組織</h1>
    <div class="result-content">
      <div class="image-section">
        <img
          src="@/images/results/r3.png"
          alt="令和のゆるい組織"
          class="result-image"
        />
        <div class="ratings-container">
          <h3 class="ratings-title">オンボーディングレベル</h3>
          <div class="rating-groups">
            <div class="rating-item">
              <span class="rating-label">ウェルカム</span>
              <div class="stars">
                <span class="star filled">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
            </div>
            <div class="rating-item">
              <span class="rating-label">早期戦力化</span>
              <div class="stars">
                <span class="star filled">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
            </div>
            <div class="rating-item">
              <span class="rating-label">エンゲージメント</span>
              <div class="stars">
                <span class="star filled">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </div>
            </div>
          </div>
          <div class="points">0.5/3 points</div>
        </div>
      </div>
      <div class="description-section">
        <p class="result-description">
          ゆるい組織とは職場の人間関係は問題ないが、仕事の基準が低かったり、KPIが達成されていなくても達成されていなくても誰も何も言わないような組織。むしろ若手社員に対して指摘することを恐れており、上司も率先して部下とコミュニケーションを取ることは少ないため、意識のある若手社員は成長実感がなく辞めてしまう。職場で心理的安全性という言葉が独り歩きしている可能性も高い。心理的安全性とは「組織の中で自分の考えや気持ちを誰に対してでも安心して発言できる状態」のことであり、健全な対立が生まれている組織である。事業のミッションやKGIを再度みんなで見直し、ミッションに対して仕事をする必要がある。
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
  name: "ResultR3",
  data: () => ({
    satisfaction: 0.5,
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
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 8px;
  margin: 50px 0px 0px 0px;
  display: block;
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
  background-color: #003366;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 300px;
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
  .satisfaction-rating {
    width: 90%;
  }
}
</style>
