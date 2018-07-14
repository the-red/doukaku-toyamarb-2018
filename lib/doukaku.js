class Block {
  constructor(height) {
    this.height = height
    this.water = 0
    this.isEdge = false
  }
}

const setEdges = blocks => {
  for (let i = 0; i < blocks.length; i++) {
    if (i === 0) {
      blocks[i].isEdge = true
    } else if (i === blocks.length - 1) {
      blocks[i].isEdge = true
    }
    if (blocks[i].height === 0) {
      blocks[i].isEdge = true
      blocks[i - 1] && (blocks[i - 1].isEdge = true)
      blocks[i + 1] && (blocks[i + 1].isEdge = true)
    }
  }
}

const sumWater = blocks =>
  blocks.reduce((total, block) => (total += block.water), 0)

const main = (...argv) => {
  const blocks = [new Block(3), new Block(1), new Block(2), new Block(4)]

  const input = argv[0]
  return input
}

module.exports = {
  main,
  Block,
  sumWater,
  setEdges,
}
