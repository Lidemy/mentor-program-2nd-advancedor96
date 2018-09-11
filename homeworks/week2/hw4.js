function isPalindromes (str) {
   let isSameChar = true
   for (let i = 0, j = str.length - 1; i < Math.ceil(str.length / 2); i++, j--) {
      if (str[i] !== str[j]) {
         isSameChar = false
         break
      }
   }
   return isSameChar
}
// console.log(isPalindromes(''))
// console.log(isPalindromes('apple'))
// console.log(isPalindromes('aaaaa'))
// console.log(isPalindromes('applppa'))

module.exports = isPalindromes
