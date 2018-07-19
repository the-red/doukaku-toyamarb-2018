class Block {
  constructor(height) {
    this.height = height
    this.water = 0
    this.isEdge = false
    this.leftHeight = null
    this.rightHeight = null
  }
}

const createBlocks = input =>
  input.split('').map(count => new Block(Number(count)))

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

    block.leftHeight = block.height
    for (let j = i - 1; j >= 0; j--) {
      if (block.leftHeight <= blocks[j].height) {
        block.leftHeight = blocks[j].height
      }
      if (blocks[j].isEdge) {
        break
      }
    }

    block.rightHeight = block.height
    for (let j = i + 1; j < blocks.length; j++) {
      if (block.rightHeight <= blocks[j].height) {
        block.rightHeight = blocks[j].height
      }
      if (blocks[j].isEdge) {
        break
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
  const input = argv[0]
  const blocks = createBlocks(input)
  setEdges(blocks)
  setWaters(blocks)
  return sumWater(blocks)
}

module.exports = {
  main,
  Block,
  createBlocks,
  sumWater,
  setEdges,
  setWaters,
}
