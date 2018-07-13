require('./helper')

it('第一引数をそのまま返す', () => {
  assert.strictEqual(doukaku('1', '2'), '1')
  assert.notStrictEqual(doukaku('1', '2'), 1)
  assert.notStrictEqual(doukaku('1', '2'), '2')
})
