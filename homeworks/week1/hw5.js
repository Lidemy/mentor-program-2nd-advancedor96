function join(str, concatStr) {
   let result = '';
   for(let i=0;i<str.length;i++){
      if(i === 0){
         result += str[i]
      }else{
         result += concatStr + str[i]
      }
   }
   return result;
   // console.log('結果：', result)
}

function repeat(str, times) {
   let result = '';
   for(let i=0;i<times;i++){
      result += str;
   }
   // console.log('2結果：', result);
   return result; 
}
