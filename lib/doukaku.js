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
    // const diff = this.queue - this.spec
    // this.queue = diff > 0 ? diff : 0
  }
}

const pluckHoge = input => {
  const hoge = input.split('')
  return hoge
}

const isFuga = hoge => {
  return hoge[0] === '1'
}

const isPiyo = hoge => {
  return hoge[0] === '2'
}

const judgeFugaPiyo = hoge => {
  if (isFuga(hoge)) {
    return 'fuga'
  }
  if (isPiyo(hoge)) {
    return 'piyo'
  }
  return 'hoge'
}

const main = (...argv) => {
  const input = argv[0]
  const hoge = pluckHoge(input)
  const fugaPiyo = judgeFugaPiyo(hoge)
  return fugaPiyo
}

module.exports = {
  main,
  Register,
  pluckHoge,
  isFuga,
  isPiyo,
  judgeFugaPiyo,
}
