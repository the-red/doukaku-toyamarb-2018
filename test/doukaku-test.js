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
it('出力結果のフォーマット', () => {
  const Register = doukaku.Register
  const registers = [
    new Register(1, 2),
    new Register(2, 7),
    new Register(3, 3),
    new Register(4, 5),
    new Register(5, 2),
  ]
  assert.deepStrictEqual(doukaku.pluckOutputString(registers), '0,0,0,0,0')
  registers[0].push(5)
  registers[1].push('x')
  assert.deepStrictEqual(doukaku.pluckOutputString(registers), '5,1,0,0,0')
})
