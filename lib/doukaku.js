class Block {
  constructor(height) {
    this.height = height
    this.water = 0
    this.isEdge = false
  }
}

const sumWater = blocks =>
  blocks.reduce((total, block) => (total += block.water), 0)

const main = (...argv) => {
  const input = argv[0]
  return input
}

module.exports = {
  main,
  Block,
  sumWater,
}
