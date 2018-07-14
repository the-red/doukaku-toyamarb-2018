require('./helper')

it('ブロックインスタンスの作成', () => {
  const block = new doukaku.Block(5)
  assert.deepStrictEqual(block.height, 5)
})

it('水の合計算出', () => {
  const blocks = [
    new doukaku.Block(3),
    new doukaku.Block(1),
    new doukaku.Block(2),
    new doukaku.Block(4),
  ]
  blocks[0].water = 0
  blocks[1].water = 2
  blocks[2].water = 1
  blocks[3].water = 0
  assert.deepStrictEqual(doukaku.sumWater(blocks), 3)
})
