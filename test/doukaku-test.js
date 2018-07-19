require('./helper')

it('ブロックインスタンスの作成', () => {
  const block = new doukaku.Block(5)
  assert.deepStrictEqual(block.height, 5)
})

it('ブロック配列の初期化', () => {
  const input = '3124'
  const blocks = doukaku.createBlocks(input)
  const correctBlocks = [
    new doukaku.Block(3),
    new doukaku.Block(1),
    new doukaku.Block(2),
    new doukaku.Block(4),
  ]
  assert.deepStrictEqual(blocks, correctBlocks)
})

it('水の合計算出', () => {
  const blocks = doukaku.createBlocks('3124')
  blocks[0].water = 0
  blocks[1].water = 2
  blocks[2].water = 1
  blocks[3].water = 0
  assert.deepStrictEqual(doukaku.sumWater(blocks), 3)
})

it('エッジブロックの判定', () => {
  const blocks = doukaku.createBlocks('3124')
  doukaku.setEdges(blocks)
  assert.deepStrictEqual(blocks[0].isEdge, true)
  assert.deepStrictEqual(blocks[1].isEdge, false)
  assert.deepStrictEqual(blocks[2].isEdge, false)
  assert.deepStrictEqual(blocks[3].isEdge, true)
})

it('エッジブロックの判定 途中に0がある場合', () => {
  const blocks = doukaku.createBlocks('903111128')
  doukaku.setEdges(blocks)
  assert.deepStrictEqual(blocks[0].isEdge, true)
  assert.deepStrictEqual(blocks[1].isEdge, true)
  assert.deepStrictEqual(blocks[2].isEdge, true)
  assert.deepStrictEqual(blocks[3].isEdge, false)
  assert.deepStrictEqual(blocks[4].isEdge, false)
  assert.deepStrictEqual(blocks[5].isEdge, false)
  assert.deepStrictEqual(blocks[6].isEdge, false)
  assert.deepStrictEqual(blocks[7].isEdge, false)
  assert.deepStrictEqual(blocks[8].isEdge, true)
})

it('水量の設定', () => {
  const blocks = doukaku.createBlocks('3124')
  doukaku.setEdges(blocks)
  doukaku.setWaters(blocks)
  assert.deepStrictEqual(blocks[0].water, 0)
  assert.deepStrictEqual(blocks[1].water, 2)
  assert.deepStrictEqual(blocks[2].water, 1)
  assert.deepStrictEqual(blocks[3].water, 0)
})
