let r = document.querySelectorAll('.btn');
let show = document.querySelector('.show');

let process = '';
let show_list = ".0123456789+-*/" //要顯示在畫面上位元

for(let i=0;i<r.length;i++){
   if(show_list.includes( r[i].dataset.d) ){
      r[i].addEventListener('click', function(e){
         let meaning = e.target.dataset.d;
         process+=meaning
         show.innerHTML = process
      })
   }else if(r[i].dataset.d === '='){
      r[i].addEventListener('click', function(e){
         // console.log('目前字串：',process)

         let result = eval(process);
         result = Math.round(result * 100)/100;
         process = '' // 內部歸零
         show.innerHTML = result
      })
   }else if(r[i].dataset.d === 'back'){
      r[i].addEventListener('click', function(e){
         process = process.slice(0, process.length-1)
         show.innerHTML = process
         if(process.length===0){
            show.innerHTML = '0'
         }
      })
   }else if(r[i].dataset.d === 'clear'){
      r[i].addEventListener('click', function(e){
         process = ''
         show.innerHTML = '0'
      })
   }else{
      r[i].addEventListener('click', function(e){
         console.log('搖晃')
      })
   }

}
