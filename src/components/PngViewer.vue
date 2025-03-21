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
}

.result-image {
  max-width: 100%;
  margin-bottom: 10px;
}
</style>
