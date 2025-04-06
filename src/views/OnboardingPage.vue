<template>
  <div class="onboarding-page">
    <h1 class="onboarding-title">オンボーディングを整え組織をより良くしましょう。</h1>
    <div class="onboarding-content">
      <img
          src="@/images/onbording.png"
          alt="オンボーディング"
          class="onboarding-image"
        />
        <button class="onboarding-button" @click="navigateToOmbo">フリープランを<br>使ってみる</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnboardingPage",
  methods: {
    navigateToOmbo() {
      this.$router.push("/ombo");
    },
  },
};
</script>

<style scoped>
.onboarding-page {
  text-align: center;
  padding: 20px;
  background-color: #4297b4;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.onboarding-title {
  font-size: 2.5em;
  margin: 50px 20px;
}

.onboarding-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding-right: 300px;
}

.onboarding-image {
  width: 300px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
}

.onboarding-button {
  font-size: 1.4em;
  font-weight: bold;
  color: white;
  background-color: #003366;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 15px 30px;
  margin-top: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  max-width: 100%;
  height: auto;
  min-height: 100px;
}

.onboarding-button:hover {
  background-color: #00264d;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* 背景画像をコンテナ全体に広げる */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 画像がコンテナを埋めるように */
  z-index: 1; /* 背景は一番下のレイヤー */
}

/* モバイル端末用メディアクエリ (タブレット・スマホ共通) */
@media screen and (max-width: 768px) {
  .onboarding-page {
    padding-top: 50px; /* 上部に余白を追加して全体を下げる */
  }

  .background-image {
    top: 50px;
    object-position: center top;
  }
  
  .onboarding-title {
    font-size: 1.5em;
    margin: 20px 10px;
    margin-top: 30px; /* タイトルを下に下げる */
  }
  
  .onboarding-content {
    flex-direction: column;
    padding: 0 10px;
    margin-top: 20px; /* コンテンツ全体も少し下げる */
  }
  
  .onboarding-image {
    width: 90%;
    max-width: 250px;
    margin: 0 auto;
    margin-top: 10px; /* 画像を少し下げる */
  }
  
  .onboarding-button {
    font-size: 1.1em;
    width: 90%;
    max-width: 200px;
    margin: 15px auto;
    margin-top: 25px; /* ボタンを下げる */
    min-height: 80px;
    padding: 10px 20px;
  }
}
</style>