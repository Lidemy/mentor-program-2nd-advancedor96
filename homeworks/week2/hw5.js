function add (a, b) {
   let i = a.length - 1
   let j = b.length - 1

   let temp_digit = '' // 某一位數
   let carry = 0 // 進位
   let result = '' // 結果、答案
   let addend1 = 0 // 加數(addend)
   let addend2 = 0 // 被加數(summand, augend) 太難記所以變數名稱取 addend1 and 2
   while (i >= 0 || j >= 0) {
      addend1 = i >= 0 ? parseInt(a[i]) : 0

      addend2 = j >= 0 ? parseInt(b[j]) : 0

      temp_digit = '' + ((addend1 + addend2 + parseInt(carry)) % 10) // 個位數

      result = temp_digit + result // 兩個字串相加，順序很重要

      carry = '' + Math.floor((addend1 + addend2 + parseInt(carry)) / 10) // carry: 進位

      i--
      j--
   }
   return result
}

module.exports = add
