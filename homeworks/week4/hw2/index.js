let email = document.querySelector('#email');
email.addEventListener('blur', function(e){
  if(email.value.length ===0 || !validateEmail(email.value)){
    document.querySelector('#emailSection').style.backgroundColor='pink'
    document.querySelector('#emailHint').innerText = '請輸入有效的電子郵件地址'
  }else{
    document.querySelector('#emailSection').style.backgroundColor='rgba(0,0,0,0)'
    document.querySelector('#emailHint').innerText = ''
  }  
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

let nickname = document.querySelector('#nickname');
nickname.addEventListener('blur', function(e){
  if(nickname.value.length ===0){
    document.querySelector('#nicknameSection').style.backgroundColor='pink'
    document.querySelector('#nicknameHint').innerText = '這是必填問題'
  }else{
    document.querySelector('#nicknameSection').style.backgroundColor='rgba(0,0,0,0)'
    document.querySelector('#nicknameHint').innerText = ''
  }  
});



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

