<template>
  <div class="home">
    <div class="viewer-container">
      <div class="description-text">
        <h2>オンボーディングレベルチェック</h2>
        <p>16問の質問に答え自社のオンボーディングレベルを確認しましょう。<br>
        回答後はオンボーディングレベルに応じた解説とアドバイスが受けられます。</p>
      </div>
      <button @click="startDiagnosis" class="start-button">診断を開始する</button>
      <PngViewer :currentImage="imagePath" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PngViewer from "@/components/PngViewer.vue";

@Options({
  components: {
    PngViewer,
  },
})
export default class HomeView extends Vue {
  imagePath = require("@/images/top_page.png"); // 表示する画像のパス

  startDiagnosis() {
    this.$router.push('/questions');
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.home {
  position: relative;
  display: inline-block;
}

.description-text {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1500px;
  text-align: center;
  color: white;
  z-index: 10;
  padding: 15px;
  border-radius: 8px;
}

.description-text h2 {
  font-size: 2.2em;
  margin-bottom: 10px;
}

.description-text p {
  font-size: 1.6em;
  line-height: 1.6;
}

.start-button {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 30px;
  font-size: 1.8em;
  color: white;
  background-color: #003366;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.start-button:hover {
  background-color: #00264d;
}
</style>