function printFactor(n) {
   // 根據數學，只要算到開根號即可
   let sqrt_num = Math.ceil( Math.sqrt(n) );
   let factor_list = []; //放答案的
   
   for(let i=1;i<= sqrt_num;i++){
      if(n % i === 0){
         factor_list.push(i);
         if( (n / i) !== i ){
            factor_list.push(n/i); //例如9可以被3整除，但是3不用放2次。
         }
      }
   }
   factor_list.sort((a, b)=> a-b ); // 由小到大排序

   for(let i=0;i<factor_list.length;i++){
      console.log(factor_list[i]);
   }
   

}