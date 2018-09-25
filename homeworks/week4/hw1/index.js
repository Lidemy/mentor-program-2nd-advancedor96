let r = document.querySelectorAll('.btn');
// console.log(r);
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
         alert('計算結果')
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