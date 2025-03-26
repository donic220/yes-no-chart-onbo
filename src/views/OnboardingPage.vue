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
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.onboarding-title {
  font-size: 2.5em;
  margin: 100px 20px;
}

.onboarding-content {
  display: flex;
  flex-direction: row; /* 横並びに変更 */
  gap: 20px; /* 要素間のスペースを追加 */
}


.onboarding-image {  
  float: left;
  text-align: left;
  margin-left: 150px;
  width: 400px;
  height: 400px;
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
  margin-top: 50px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 100px;
}

.onboarding-button:hover {
  background-color: #00264d;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
</style>