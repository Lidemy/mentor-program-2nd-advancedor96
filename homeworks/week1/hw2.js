function capitalize(str) {
   let UpperCase = str[0];
   if(str[0] >= 'a' && str[0] <= 'z'){
      UpperCase = str[0].toUpperCase();
   }
   let result = UpperCase + str.slice(1, str.length);
   return result;
  
}