import DrawScene from './scene'

const gameConfig = {
  type: Phaser.AUTO,
  backgroundColor: 0xaaaaaa,
  antialias: true,
  parent: 'game',
  width: 300,
  height: 250,
  pixelArt: true,
  title: 'phaser-demo',
  version: '1.0.0',
  url: '',
  banner: {
    hidePhaser: true
  },
  scene: DrawScene
}

export default gameConfig