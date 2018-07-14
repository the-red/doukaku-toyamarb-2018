class Register {
  constructor(id, spec) {
    this.id = id
    this.spec = spec
    this.queue = 0
    this.xPosition = null
  }
  push(count) {
    if (count === 'x') {
      this.queue += 1
      this.xPosition = this.queue
    } else {
      this.queue += count
    }
  }
  pop() {
    for (let i = 0; i < this.spec; i++) {
      if (this.xPosition === 1) {
        return
      }
      if (this.queue === 0) {
        return
      }
      this.queue--
      if (this.xPosition > 0) {
        this.xPosition--
      }
    }
  }
}

const pluckOutputString = registers => registers.map(r => r.queue).join(',')

const main = (...argv) => {
  const registers = [
    new Register(1, 2),
    new Register(2, 7),
    new Register(3, 3),
    new Register(4, 5),
    new Register(5, 2),
  ]

  return pluckOutputString(registers)
}

module.exports = {
  main,
  Register,
  pluckOutputString,
}
