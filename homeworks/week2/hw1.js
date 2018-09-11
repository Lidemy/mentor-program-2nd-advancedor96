function stars(n) {
   let result = []
   for(let i=0;i<n;i++){
      result.push( "*".repeat(i+1) )
   }
   return result
}

module.exports = stars;