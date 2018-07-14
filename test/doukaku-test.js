require('./helper')

it('ブロックインスタンスの作成', () => {
  const block = new doukaku.Block(5)
  assert.deepStrictEqual(block.height, 5)
})
