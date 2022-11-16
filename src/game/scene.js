import { Scene } from 'phaser'
import gameConfig from './config'

class DrawScene extends Scene {
  constructor () {
    super({ key: 'Draw' })
  }
  create () {
    const startPaint = pointer => {
      if (!pointer.isDown) return
      pen.strokeLineShape({
        x1: pointer.prevPosition.x,
        y1: pointer.prevPosition.y,
        x2: pointer.x,
        y2: pointer.y
      })
    }

    const clearPaint = () => {
      pen.clear()
    }
    this.events.on('clear', clearPaint, this)


    this.add.zone(0, 0, gameConfig.width, gameConfig.height)
      .setInteractive()
      .setOrigin(0, 0)
      .on('pointermove', startPaint)
    
    const pen = this.add.graphics({
      lineStyle: {
        width: 5,
        color: 0xffaa00,
        alpha: 1
      }
    })
  }
}

export default DrawScene