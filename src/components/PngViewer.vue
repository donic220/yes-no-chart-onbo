<template>
  <div class="png-viewer">
    <img :src="currentImage" alt="Result Image" class="result-image" />
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "PngViewer",
  props: {
    currentImage: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.png-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.result-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* スマホ向けのメディアクエリ */
@media screen and (max-width: 768px) {
  .png-viewer {
    max-width: 90%;
  }
}

@media screen and (max-width: 480px) {
  .png-viewer {
    max-width: 95%;
  }
  
  .result-image {
    border-radius: 4px;
  }
}
</style>
