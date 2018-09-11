function alphaSwap (str) {
   let result = ''
   // 不知道為什麼 let result = str 後，用直接陣列index 對應的修改，會錯
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
module.exports = alphaSwap
