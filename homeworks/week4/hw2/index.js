let email = document.querySelector('#email');
email.addEventListener('blur', function(e){
  checkEmail();
});


let nickname = document.querySelector('#nickname');
nickname.addEventListener('blur', function(e){
  check('#nickname');
});

let type = document.querySelectorAll('.type:checked');

// 現在的職業
let work = document.querySelector('#work');
work.addEventListener('blur', function(e){
  check('#work'); 
});

// 是否有程式相關背景
let relative = document.querySelector('#relative');
relative.addEventListener('blur', function(e){
  check('#relative');
});


let btn = document.querySelector('.submit');
btn.addEventListener('click', function(){
  checkEmail()
  check('#nickname')
  check('#work')
  check('#relative')
  if( checkEmail() &&  check('#nickname') && check('#work') && check('#relative') ){
    if ( document.querySelectorAll('.type:checked').length === 0){
      document.querySelector('.type').parentNode.style.backgroundColor='pink'
    }else{
      document.querySelector('.type').parentNode.style.backgroundColor='rgba(0,0,0,0)'

      console.log('電子信箱:',email.value)
      console.log('暱稱:',nickname.value)
      console.log('報名類型:',document.querySelectorAll('.type:checked')[0].value)
      console.log('職業:',work.value)
      console.log('相關經驗:',relative.value)
      console.log('其他:',document.querySelector('#other').value)
      
      alert('表單送出，資料請看console')
    }
  }

})

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function check(selector){
  let node = document.querySelector(selector);
  if(node.value.length === 0){
    node.parentNode.style.backgroundColor='pink'
    node.nextElementSibling.innerText = '這是必填問題'
    return false;
  }else{
    node.parentNode.style.backgroundColor='rgba(0,0,0,0)'
    node.nextElementSibling.innerText = ''
    return true;
  }
}

function checkEmail(){
  let email = document.querySelector('#email');
  if(email.value.length === 0 || !validateEmail(email.value)){
    email.parentNode.style.backgroundColor='pink'
    email.nextElementSibling.innerText = '請輸入有效的電子郵件地址'
    return false;
  }else{
    email.parentNode.style.backgroundColor='rgba(0,0,0,0)'
    email.nextElementSibling.innerText = ''
    return true;
  }
}
