class Register {
  constructor(id, spec) {
    this.id = id
    this.spec = spec
    this.queue = 0
  }
  push(count) {
    this.queue += count
  }
  pop() {
    const diff = this.queue - this.spec
    this.queue = diff > 0 ? diff : 0
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
