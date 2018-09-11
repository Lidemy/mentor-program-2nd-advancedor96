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
   // 不知道為什麼 let result = str 後，用直接陣列index 對應的修改，會錯
   // let result = str
   // for (let i = 0; i < str.length; i++) {
   //    if (/[A-Z]/.test(str[i])) {
   //       result[i] = str[i].toLowerCase()
   //    } else if (/[a-z]/.test(str[i])) {
   //       result[i] = str[i].toUpperCase()
   //    } else {
   //       result[i] = str[i]
   //    }
   // }

   return result
}
alphaSwap('Nick')

module.exports = alphaSwap
