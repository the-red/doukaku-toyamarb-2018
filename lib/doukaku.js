const pluckCards = input => {
  const cards = []
  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    if (/[SHDC]/.test(char)) {
      cards.push({ suit: char, number: '' })
    } else {
      cards[cards.length - 1].number += char
    }
  }
  return cards
}

const is4K = cards => {
  const numberCount = cards.reduce((obj, card) => {
    if (obj[card.number]) {
      obj[card.number]++
    } else {
      obj[card.number] = 1
    }
    return obj
  }, {})
  return Object.values(numberCount).some(count => count === 4)
}
const isFH = cards => {
  const numberCount = cards.reduce((obj, card) => {
    if (obj[card.number]) {
      obj[card.number]++
    } else {
      obj[card.number] = 1
    }
    return obj
  }, {})
  return (
    Object.values(numberCount).some(count => count === 3) &&
    Object.values(numberCount).some(count => count === 2)
  )
}
const is3K = cards => {
  const numberCount = cards.reduce((obj, card) => {
    if (obj[card.number]) {
      obj[card.number]++
    } else {
      obj[card.number] = 1
    }
    return obj
  }, {})
  return (
    Object.values(numberCount).some(count => count === 3) &&
    Object.values(numberCount).every(count => count !== 2)
  )
}
const is2P = cards => {
  const numberCount = cards.reduce((obj, card) => {
    if (obj[card.number]) {
      obj[card.number]++
    } else {
      obj[card.number] = 1
    }
    return obj
  }, {})
  return Object.values(numberCount).filter(count => count === 2).length === 2
}
const is1P = cards => {
  const numberCount = cards.reduce((obj, card) => {
    if (obj[card.number]) {
      obj[card.number]++
    } else {
      obj[card.number] = 1
    }
    return obj
  }, {})
  return Object.values(numberCount).filter(count => count === 2).length === 1
}
const judgeRole = cards => {
  if (is4K(cards)) {
    return '4K'
  }
  if (isFH(cards)) {
    return 'FH'
  }
  if (is3K(cards)) {
    return '3K'
  }
  if (is2P(cards)) {
    return '2P'
  }
  if (is1P(cards)) {
    return '1P'
  }
  return '--'
}

const main = (...argv) => {
  const input = argv[0]
  const cards = pluckCards(input)
  const role = judgeRole(cards)
  return role
}

module.exports = {
  main,
  pluckCards,
  judgeRole,
  is4K,
  isFH,
  is3K,
  is2P,
  is1P,
}
