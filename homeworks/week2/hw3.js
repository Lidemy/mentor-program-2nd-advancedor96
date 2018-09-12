function isPrime (n) {
  if (n === 1) { return false } // 1依規定，不是質數
  let isDivisible = false
  for (let i = 2; i <= Math.ceil(n / 2); i++) { // 迴圈跑到一半就可以了
    if (n % i === 0) {
      isDivisible = true
      break
    }
  }

  if (isDivisible === true) { // 有數字可以除盡它=>不為質數
    return false
  } else { // 沒有數字可以除盡它=>為質數
    return true
  }
}

module.exports = isPrime
