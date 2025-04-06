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

/* スマホ向けのメディアクエリ */
@media screen and (max-width: 768px) {
  .background-image {
    top: 50px; /* タブレット表示時は少し下げる */
    object-position: center top; /* 上部を基準に表示 */
  }
  
  .onboarding-title {
    font-size: 1.5em; /* 1.8emから1.5emに小さく */
    margin: 20px 10px; /* マージンも少し小さく */
  }
  
  .onboarding-content {
    flex-direction: column;
    padding: 0 10px;
  }
  
  .onboarding-image {
    width: 50%; /* 100%から90%に小さく */
    max-width: 250px; /* 300pxから250pxに小さく */
    margin: 0 auto;
  }
  
  .onboarding-button {
    font-size: 1.1em; /* 1.2emから1.1emに小さく */
    width: 90%; /* 幅も調整 */
    max-width: 200px; /* 250pxから200pxに小さく */
    margin: 15px auto; /* マージンも少し小さく */
    min-height: 80px; /* 高さも調整 */
    padding: 10px 20px; /* パディングも調整 */
  }
}
</style>