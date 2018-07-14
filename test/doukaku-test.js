require('./helper')

it('レジのインスタンスを作成', () => {
  const register = new doukaku.Register(1, 2)
  assert.deepStrictEqual(register.id, 1)
  assert.deepStrictEqual(register.spec, 2)
  assert.deepStrictEqual(register.queue, 0)
  assert.deepStrictEqual(register.xPosition, null)
})
it('レジに人が並ぶ', () => {
  const register = new doukaku.Register(1, 2)
  register.push(4)
  assert.deepStrictEqual(register.queue, 4)
})
it('レジにxが並ぶ', () => {
  const register = new doukaku.Register(1, 2)
  register.push(4)
  register.push('x')
  assert.deepStrictEqual(register.queue, 5)
  assert.deepStrictEqual(register.xPosition, 5)
})
it('レジが会計をする', () => {
  const register1 = new doukaku.Register(1, 2)
  register1.push(4)
  register1.pop()
  assert.deepStrictEqual(register1.queue, 2)

  const register2 = new doukaku.Register(2, 7)
  register2.push(4)
  register2.pop()
  assert.deepStrictEqual(register2.queue, 0)
})
it('レジがxの会計をする', () => {
  const register1 = new doukaku.Register(1, 1)
  register1.push(4)
  register1.push('x')
  register1.pop()
  assert.deepStrictEqual(register1.queue, 4)
  register1.pop()
  assert.deepStrictEqual(register1.queue, 3)
  register1.pop()
  assert.deepStrictEqual(register1.queue, 2)
  register1.pop()
  assert.deepStrictEqual(register1.queue, 1)
  register1.pop()
  assert.deepStrictEqual(register1.queue, 1)
  register1.push(1)
  assert.deepStrictEqual(register1.queue, 2)
  register1.pop()
  assert.deepStrictEqual(register1.queue, 2)

  const register2 = new doukaku.Register(2, 7)
  register2.push(2)
  register2.push('x')
  register2.pop()
  assert.deepStrictEqual(register2.queue, 1)
  register2.push(3)
  register2.pop()
  assert.deepStrictEqual(register2.queue, 4)
})
// it('hoge抽出', () => {
//   assert.deepStrictEqual(doukaku.pluckHoge('123'), ['1', '2', '3'])
// })
// it('fuga判定', () => {
//   assert.deepStrictEqual(doukaku.isFuga('1'), true)
//   assert.deepStrictEqual(doukaku.isFuga(doukaku.pluckHoge('123')), true)
//   assert.deepStrictEqual(doukaku.isFuga(doukaku.pluckHoge('234')), false)
// })
// it('piyo判定', () => {
//   assert.deepStrictEqual(doukaku.isPiyo('2'), true)
//   assert.deepStrictEqual(doukaku.isPiyo(doukaku.pluckHoge('123')), false)
//   assert.deepStrictEqual(doukaku.isPiyo(doukaku.pluckHoge('234')), true)
// })
// it('hoge fuga piyo判定', () => {
//   assert.deepStrictEqual(
//     doukaku.judgeFugaPiyo(doukaku.pluckHoge('345')),
//     'hoge'
//   )
//   assert.deepStrictEqual(
//     doukaku.judgeFugaPiyo(doukaku.pluckHoge('123')),
//     'fuga'
//   )
//   assert.deepStrictEqual(
//     doukaku.judgeFugaPiyo(doukaku.pluckHoge('234')),
//     'piyo'
//   )
// })
