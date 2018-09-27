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
  let isGood = true;
  if( checkEmail() &&  check('#nickname') && check('#work') && check('#relative') ){
    if ( document.querySelectorAll('.type:checked').length === 0){
      document.querySelector('.type').parentNode.style.backgroundColor='pink'
    }else{
      document.querySelector('.type').parentNode.style.backgroundColor='rgba(0,0,0,0)'

      console.log('email:',email.value)
      console.log('nickname:',nickname.value)
      console.log('type:',document.querySelectorAll('.type:checked')[0].value)
      console.log('work:',work.value)
      console.log('relative:',relative.value)
      console.log('other:',document.querySelector('#other').value)
      
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



// let btn = document.querySelector('.submit');
// btn.addEventListener('click', function(){
//   let isError = false;
//   let result =[]
//   let os_list = document.querySelectorAll('.os:checked');
//   if(os_list.length ===0){
//     document.querySelector('#osSection').style.backgroundColor='pink'
//     isError = true;
//   }else{
//     document.querySelector('#osSection').style.backgroundColor='rgba(0,0,0,0)'
//     result.push({
//       id: 0,
//       question: '作業系統',
//       ans: [...os_list].map(e=>e.value)
//     })
//   }
//   let numOfDevice = document.querySelector('#device')
//   if(numOfDevice.value.length ===0){
//     document.querySelector('#deviceSection').style.backgroundColor='pink'
//     isError = true;
//   }else{
//     document.querySelector('#deviceSection').style.backgroundColor='rgba(0,0,0,0)'
//     result.push({
//       id: 1,
//       question: '裝置數量',
//       ans: numOfDevice.value
//     })
//   }

//   let feel_list = document.querySelectorAll('.feel:checked');
//   if(feel_list.length === 0){
//     document.querySelector('#feelSection').style.backgroundColor='pink'
//     isError = true;
//   }else{
//     document.querySelector('#feelSection').style.backgroundColor='rgba(0,0,0,0)'
//     result.push({
//       id: 2,
//       question: '整理滿意度',
//       ans: feel_list[0].value
//     })
//   }
  
//   let other = document.querySelector('#other');
//   result.push({
//     id: 3,
//     question: '其他補充',
//     ans: other.value
//   })

//   if(!isError){
//     console.log(result)
//     alert('表單送出，資料請看console')
//   }
  
// })

