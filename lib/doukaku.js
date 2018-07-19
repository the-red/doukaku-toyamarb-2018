class Block {
  constructor(height) {
    this.height = height
    this.water = 0
    this.isEdge = false
    this.leftHeight = null
    this.rightHeight = null
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

const setWaters = blocks => {
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]

    if (block.isEdge) {
      block.water = 0
      continue
    }

    for (let j = i - 1; j >= 0; j--) {
      if (blocks[j].isEdge) {
        block.leftHeight = blocks[j].height
      }
    }
    for (let j = i + 1; j < blocks.length; j++) {
      if (blocks[j].isEdge) {
        block.rightHeight = blocks[j].height
      }
    }
    if (block.height > block.leftHeight && block.height > block.rightHeight) {
      block.water = 0
    } else if (block.leftHeight < block.rightHeight) {
      block.water = block.leftHeight - block.height
    } else {
      block.water = block.rightHeight - block.height
    }
  }
}

const sumWater = blocks =>
  blocks.reduce((total, block) => (total += block.water), 0)

const main = (...argv) => {
  const input = argv[0].split('')
  const blocks = input.map(count => new Block(count))
  setEdges(blocks)
  setWaters(blocks)
  return sumWater(blocks)
}

module.exports = {
  main,
  Block,
  sumWater,
  setEdges,
  setWaters,
}
