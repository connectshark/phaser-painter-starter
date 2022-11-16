import Phaser from 'phaser'
import { ref } from 'vue'
import gameConfig from '../game/config'

const usePhaser = () => {
  const game = ref(null)
  const createGame = () => {
    game.value = new Phaser.Game(gameConfig)
  }
  
  const closeGame = () => {
    game.value.destroy()
  }

  const screenShot = () => {
    return new Promise((resolve, reject) => {
      game.value.renderer.snapshot(image => {
        resolve(image.src)
      })
    })
  }

  const clearPaint = () => {
    game.value.scene.keys.Draw.events.emit('clear')
  }
  return {
    createGame,
    closeGame,
    screenShot,
    clearPaint
  }
}

export {
  usePhaser
}