function add (a, b) {
   let i = a.length - 1
   let j = b.length - 1

   let one = ''; let two = '0'
   let r = ''
   let aa = 0
   let bb = 0
   while (i >= 0 || j >= 0) {
      aa = i >= 0 ? parseInt(a[i]) : 0
      // console.log('a[i]:', aa)

      bb = j >= 0 ? parseInt(b[j]) : 0
      // console.log('b[j]:', bb)

      one = '' + ((aa + bb + parseInt(two)) % 10)
      // console.log('個位數:', one)

      two = '' + (Math.floor((aa + bb + parseInt(two)) / 10))
      // console.log('進位:', two)
      r = one + r
      i--
      j--
   }
   return r
}
module.exports = add
