<template>
  <div class="home">
    <div class="background-container">
      <!-- 背景画像を明示的にimgタグとして配置 -->
      <img :src="imagePath" alt="背景" class="background-image" />
      <div class="content-overlay">
        <div class="description-text">
          <h2>オンボーディングレベルチェック</h2>
          <p>16問の質問に答え自社のオンボーディングレベルを確認しましょう。<br>
          回答後はオンボーディングレベルに応じた解説とアドバイスが受けられます。</p>
        </div>
        <button @click="startDiagnosis" class="start-button">診断を開始する</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
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
  margin: 0;
  padding: 0;
}

.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.background-container {
  width: 100%;
  height: 100vh;
  position: relative;
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

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 2; /* コンテンツは背景より上のレイヤー */
}

.description-text {
  width: 90%;
  max-width: 1500px;
  text-align: center;
  color: white;
  z-index: 10;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 40px;
}

.description-text h2 {
  font-size: 2.2em;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* テキストに影をつけて読みやすく */
}

.description-text p {
  font-size: 1.6em;
  line-height: 1.8;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.start-button {
  padding: 12px 30px;
  font-size: 1.8em;
  color: white;
  background-color: #003366;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 3;
}

.start-button:hover {
  background-color: #00264d;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}


/* スマホ向け */
@media screen and (max-width: 780px) {
  .content-overlay {
    justify-content: space-between;
    height: 100%;
    padding: 0;
  }
  
  .description-text {
    margin: 0;
    padding-top: 30px; /* 上部のパディングを減らす */
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .description-text h2 {
    font-size: 1.6em; /* 見出しのサイズを小さく */
    margin-bottom: 15px;
  }
  
  .description-text p {
    font-size: 1em; /* 段落のサイズを小さく */
    line-height: 1.5;
    text-align: left;
  }
  
  .start-button {
    margin-bottom: 150px; /* ボタンの下マージンを減らす */
    height: 60px; /* ボタンの高さを小さく */
    width: 70%; /* 幅も少し狭く */
    max-width: 250px;
    font-size: 1.2em; /* ボタン内のテキストも小さく */
    padding: 8px 20px;
  }
}
</style>