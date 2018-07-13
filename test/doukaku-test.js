require('./helper')

it('カードを認識', () => {
  assert.deepStrictEqual(doukaku.pluckCards('D3C3C10D10S3'), [
    { number: '3', suit: 'D' },
    { number: '3', suit: 'C' },
    { number: '10', suit: 'C' },
    { number: '10', suit: 'D' },
    { number: '3', suit: 'S' },
  ])
  assert.deepStrictEqual(doukaku.pluckCards('DACAC10D10S3'), [
    { number: 'A', suit: 'D' },
    { number: 'A', suit: 'C' },
    { number: '10', suit: 'C' },
    { number: '10', suit: 'D' },
    { number: '3', suit: 'S' },
  ])
})
it('フォーカード判定', () => {
  assert.deepStrictEqual(
    doukaku.is4K(doukaku.pluckCards('D3C3C10D10S3')),
    false
  )
  assert.deepStrictEqual(doukaku.is4K(doukaku.pluckCards('D3C3C10D3S3')), true)
})
it('フルハウス判定', () => {
  assert.deepStrictEqual(doukaku.isFH(doukaku.pluckCards('D3C3C10D10S3')), true)
  assert.deepStrictEqual(doukaku.isFH(doukaku.pluckCards('D3C3C10D3S3')), false)
})
it('スリーカード判定', () => {
  assert.deepStrictEqual(doukaku.is3K(doukaku.pluckCards('D3C3C10D9S3')), true)
  assert.deepStrictEqual(
    doukaku.is3K(doukaku.pluckCards('D3C3C10D10S3')),
    false
  )
})
it('ツーペア判定', () => {
  assert.deepStrictEqual(doukaku.is2P(doukaku.pluckCards('D3C3C10D10S2')), true)
  assert.deepStrictEqual(
    doukaku.is2P(doukaku.pluckCards('D3C3C10D10S3')),
    false
  )
})
it('ワンペア判定', () => {
  assert.deepStrictEqual(doukaku.is1P(doukaku.pluckCards('D3C3C10D9S2')), true)
  assert.deepStrictEqual(doukaku.is1P(doukaku.pluckCards('DACAC10D9S2')), true)
  assert.deepStrictEqual(
    doukaku.is1P(doukaku.pluckCards('D3C3C10D10S2')),
    false
  )
})
it('ロール判定', () => {
  assert.deepStrictEqual(
    doukaku.judgeRole(doukaku.pluckCards('D3C3C10D3S3')),
    '4K'
  )
  assert.deepStrictEqual(
    doukaku.judgeRole(doukaku.pluckCards('D3C3C10D10S3')),
    'FH'
  )
  assert.deepStrictEqual(
    doukaku.judgeRole(doukaku.pluckCards('D3C3C10D9S3')),
    '3K'
  )
  assert.deepStrictEqual(
    doukaku.judgeRole(doukaku.pluckCards('D3C3C10D10S2')),
    '2P'
  )
  assert.deepStrictEqual(
    doukaku.judgeRole(doukaku.pluckCards('DACAC10D9S2')),
    '1P'
  )
  assert.deepStrictEqual(
    doukaku.judgeRole(doukaku.pluckCards('DACKC10D9S2')),
    '--'
  )
})
