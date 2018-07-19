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

it('入力 -> 出力の各パターンテスト', () => {
  const test = (input, output) => assert.equal(doukaku.main(input), output)

  // /* 0 */ test('83141310145169154671122', '24')
  /* 1 */ test('923111128', '45')
  // /* 2 */ test('923101128', '1')
  // /* 3 */ test('903111128', '9')
  /* 4 */ test('3', '0')
  /* 5 */ test('31', '0')
  /* 6 */ test('412', '1')
  /* 7 */ test('3124', '3')
  /* 8 */ test('11111', '0')
  // /* 9 */ test('222111', '0')
  // /* 10 */ test('335544', '0')
  // /* 11 */ test('1223455321', '0')
  // /* 12 */ test('000', '0')
  // /* 13 */ test('000100020003121', '1')
  // /* 14 */ test('1213141516171819181716151413121', '56')
  // /* 15 */ test('712131415161718191817161514131216', '117')
  // /* 16 */ test('712131405161718191817161514031216', '64')
  // /* 17 */ test('03205301204342100', '1')
  // /* 18 */ test('0912830485711120342', '18')
  // /* 19 */ test('1113241120998943327631001', '20')
  // /* 20 */ test('7688167781598943035023813337019904732', '41')
  // /* 21 */ test('2032075902729233234129146823006063388', '79')
  // /* 22 */ test('8323636570846582397534533', '44')
  // /* 23 */ test('2142555257761672319599209190604843', '41')
  // /* 24 */ test('06424633785085474133925235', '51')
  // /* 25 */ test('503144400846933212134', '21')
  // /* 26 */ test('1204706243676306476295999864', '21')
  // /* 27 */ test('050527640248767717738306306596466224', '29')
  // /* 28 */ test('5926294098216193922825', '65')
  // /* 29 */ test('655589141599534035', '29')
  // /* 30 */ test('7411279689677738', '34')
  // /* 31 */ test('268131111165754619136819109839402', '102')
})
