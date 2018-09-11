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

module.exports = isPalindromes
