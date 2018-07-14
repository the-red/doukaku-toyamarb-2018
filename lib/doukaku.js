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

const main = (...argv) => {
  const input = argv[0]
  return input
}

module.exports = {
  main,
  Register,
}
