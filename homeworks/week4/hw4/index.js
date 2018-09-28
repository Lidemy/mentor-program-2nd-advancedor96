function q(selector){
   let e = document.querySelector(selector);
   e.hide = function(){
      this.style.display = 'none'
   }

   e.show = function(){
      this.style.display = 'block';
   }
   return e;
}


q('.show_btn').addEventListener('click', function(){
   let blueBox = q('.blue');
   blueBox.show();
})
q('.hide_btn').addEventListener('click', function(){
   let blueBox = q('.blue');
   blueBox.hide();
})
