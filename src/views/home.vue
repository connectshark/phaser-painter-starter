<template>
  <main class="main">
    <h1>畫圖區</h1>
    <div id="game"></div>
    <div class="group">
      <button type="button" @click="screenShot">截圖</button>
      <button type="button" @click="clearHandler">清除</button>
    </div>
    <div class="pre" v-if="baseCode">
      <img :src="baseCode" alt="">
    </div>
    <p v-if="baseCode" class="code">{{ baseCode }}</p>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { usePhaser } from '../composables/game'

const {
  createGame,
  closeGame,
  clearPaint,
  screenShot: phaserScreenShot
} = usePhaser()

const clearHandler = () => {
  clearPaint()
  baseCode.value = ''
}

const baseCode = ref('')

const screenShot = async () => {
  baseCode.value = await phaserScreenShot()
}


onMounted(createGame)
onBeforeUnmount(closeGame)
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    line-height: 4;
  }
  #game {
    text-align: center;
  }
  .group {
    text-align: center;
    button {
      background-color: #ffffff;
      padding: 1rem;
      border-radius: 1rem;
      border: 2px solid #333;
      margin: 0 4px;
      color: #333;
      cursor: pointer;
      &:hover {
        background-color: #333;
        color: #fff;
      }
    }
  }
  .code {
    width: 80%;
    max-width: 500px;
    background-color: #ccc;
    padding: 2rem;
    box-sizing: border-box;
    margin: auto;
    word-wrap: break-word;
  }
  .pre {
    width: 80%;
    max-width: 500px;
    margin: auto;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>