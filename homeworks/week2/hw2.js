function alphaSwap (str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      result += str[i].toLowerCase()
    } else if (/[a-z]/.test(str[i])) {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }

  return result
}
alphaSwap('Nick')

module.exports = alphaSwap
